import firebase from '../../Firebase';

import {
  AuthState,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
  CLEAR_AUTH_ERRORS,
  LOADING_END,
  LOADING_START,
  AuthActionTypes,
} from './actionTypes';

import { sendEmailVerificationCode, verifyEmailSuccess } from './admin';
import { createUser } from './userPatron';
import { checkDistilleryAuthorization, createDistillery } from './userDistillery';

export const loadingEnd = (): AuthActionTypes => ({
  type: LOADING_END,
});

export const loadingStart = (): AuthActionTypes => ({
  type: LOADING_START,
});

export const authSuccess = (userId: string | null) => ({
  type: AUTH_SUCCESS,
  userId,
});

export const authFail = (error: AuthState): { type: string; error: AuthState } => ({
  type: AUTH_FAIL,
  error,
});

export const clearAuthErrors = (): AuthActionTypes => ({
  type: CLEAR_AUTH_ERRORS,
});

export const logout = (): AuthActionTypes => ({
  type: AUTH_LOGOUT,
});

export const authLogout = () => (dispatch) => {
  firebase.auth().signOut()
    .then(() => {
      dispatch(logout());
      localStorage.removeItem('userId');
      localStorage.removeItem('distilleryEmail');
    })
    .catch((error) => {
      dispatch(authFail(error));
    });
};

export const auth = (values, isSignup: boolean, isDistillery?: boolean) => (dispatch) => {
  const { email, password, rememberMe } = values;
  dispatch(loadingStart());
  if (isSignup) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const { uid } = response.user;
        dispatch(authSuccess(uid));
        dispatch(sendEmailVerificationCode());
      })
      .then(() => {
        if (!isDistillery) {
          const {
            firstname, lastname, username, postcode,
          } = values;
          dispatch(createUser({
            firstname, lastname, username, postcode,
          }));
        }
      })
      .then(() => {
        dispatch(loadingEnd());
      })
      .catch((error) => {
        dispatch(authFail(error));
      });
  } else if (!isSignup) {
    const signIn = () => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((response) => {
          const { emailVerified, uid } = response.user;
          dispatch(authSuccess(uid));
          dispatch(checkDistilleryAuthorization(email));
          if (emailVerified) {
            dispatch(verifyEmailSuccess());
          }
        })
        .then(() => {
          dispatch(loadingEnd());
        })
        .catch((error) => {
          dispatch(authFail(error));
        });
    };
    if (rememberMe) {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE).then(signIn);
    } else {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(signIn);
    }
  }
};
