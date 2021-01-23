import axios from 'axios';

import firebase from 'firebase';
import {
  ADMIN_FAIL,
  ADMIN_RESET,
  AdminActionTypes,
  AdminState,
  CLEAR_ADMIN_ERRORS,
  CODE_SEND_SUCCESS,
  PASSWORD_RESET_SUCCESS,
  VERIFY_CODE_SUCCESS,
  VERIFY_EMAIL_SUCCESS,
} from './actionTypes';

export const adminFail = (error): { type: string; error: AdminState } => ({
  type: ADMIN_FAIL,
  error,
});

export const adminReset = (): AdminActionTypes => ({
  type: ADMIN_RESET,
});

export const clearAdminErrors = (): AdminActionTypes => ({
  type: CLEAR_ADMIN_ERRORS,
});

export const codeSendSuccess = (response) => ({
  type: CODE_SEND_SUCCESS,
  response,
});

export const passwordResetSuccess = (response) => ({
  type: PASSWORD_RESET_SUCCESS,
  response,
});

export const verifyCodeSuccess = (response) => ({
  type: VERIFY_CODE_SUCCESS,
  response,
});

export const verifyEmailSuccess = () => ({
  type: VERIFY_EMAIL_SUCCESS,
});

export const checkEmailVerified = () => (dispatch) => {
  const user = firebase.auth().currentUser;
  if (user !== null) {
    const { emailVerified } = user;
    if (emailVerified) {
      dispatch(verifyEmailSuccess());
    }
  } else {
    dispatch(adminFail('Please log out and sign in again'));
  }
};

export const sendEmailVerificationCode = () => (dispatch) => {
  const user = firebase.auth().currentUser;

  user.sendEmailVerification()
    .then((response) => {
      dispatch(codeSendSuccess(response));
    })
    .catch((error) => {
      dispatch(adminFail(error));
    });
};

export const sendPasswordResetCode = (email: string) => (dispatch) => {
  const url: string = 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=<FIREBASE_API_KEY>';
  const data = {
    requestType: 'PASSWORD_RESET',
    email,
  };
  axios.post(url, data).then((response) => {
    dispatch(codeSendSuccess(response.status));
  }).catch((err) => {
    dispatch(adminFail(err.response.data.error));
  });
};

export const setNewPassword = (oobCode: string, newPassword: string) => (dispatch) => {
  const url: string = 'https://identitytoolkit.googleapis.com/v1/accounts:resetPassword?key=<FIREBASE_API_KEY>';
  const data = {
    oobCode,
    newPassword,
  };
  axios.post(url, data).then((response) => {
    const user = firebase.auth().currentUser;
    user.updatePassword(newPassword).then(() => {
      dispatch(passwordResetSuccess(response.status));
    }).catch((error) => {
      dispatch(adminFail(error.response.data.error));
    });
  }).catch((err) => {
    dispatch(adminFail(err.response.data.error));
  });
};

export const verifyEmailCode = (oobCode: string) => (dispatch) => {
  const url: string = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=<FIREBASE_API_KEY>';
  const data = {
    oobCode,
  };
  axios.post(url, data).then((response) => {
    if (response.data.emailVerified) {
      dispatch(verifyEmailSuccess());
    }
  }).catch((err) => {
    dispatch(adminFail(err.response.data.error));
  });
};

export const verifyPasswordResetCode = (oobCode: string) => (dispatch) => {
  const url: string = 'https://identitytoolkit.googleapis.com/v1/accounts:resetPassword?key=<FIREBASE_API_KEY>';
  const data = {
    requestType: 'PASSWORD_RESET',
    oobCode,
  };
  axios.post(url, data).then((response) => {
    dispatch(verifyCodeSuccess(response.status));
  }).catch((err) => {
    dispatch(adminFail(err.response.data.error));
  });
};
