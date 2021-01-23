import firebase from 'firebase/app';
import { db } from '../../Firebase';

import {
  CREATE_USER_SUCCESS,
  DELETE_USER_SUCCESS,
  GET_USER_SUCCESS, RESET_ERROR_AND_RESPONSE,
  UPDATE_USER_SUCCESS,
  USER_REQ_FAIL,
  UserState,
  UserValueTypes,
} from './actionTypes';

export const userReqFail = (error): { type: string; error: UserState } => ({
  type: USER_REQ_FAIL,
  error,
});

export const createUserSuccess = (response): {type: string; response: UserState} => ({
  type: CREATE_USER_SUCCESS,
  response,
});

export const createUser = ({
  firstname, lastname, username, postcode,
}: UserValueTypes) => (dispatch) => {
  const data: UserValueTypes = {
    username,
    firstname,
    lastname,
    postcode,
  };
  const user = firebase.auth().currentUser;

  db.collection('users').doc(user.uid).set({
    data,
  })
    .then((docRef) => {
      dispatch(createUserSuccess(docRef));
    })
    .catch((error) => {
      dispatch(userReqFail(error));
    });
};

export const deleteUserSuccess = (response): {type: string; response: UserState} => ({
  type: DELETE_USER_SUCCESS,
  response,
});

export const deleteUser = () => (dispatch) => {
  // TODO: Add double confirmation message in UI
  const user = firebase.auth().currentUser;

  user.delete()
    .then((response) => {
      dispatch(deleteUserSuccess(response));
    })
    .catch((error) => {
      dispatch(userReqFail(error));
    });
};

export const getUserSuccess = (response): {type: string; response: UserState} => ({
  type: GET_USER_SUCCESS,
  response,
});

export const getUser = () => (dispatch) => {
  const user = firebase.auth().currentUser;
  if (user !== null) {
    const {
      displayName, email, emailVerified, photoURL, uid,
    } = user;
    dispatch(getUserSuccess({
      displayName, email, emailVerified, photoURL, uid,
    }));
  }
};

export const resetErrorAndResponse = (): {type: string} => ({
  type: RESET_ERROR_AND_RESPONSE,
});

export const updateUserSuccess = (response): {type: string; response: UserState} => ({
  type: UPDATE_USER_SUCCESS,
  response,
});

export const updateUser = (values) => (dispatch) => {
  const user = firebase.auth().currentUser;

  user.updateProfile({
    displayName: values.displayName,
    photoURL: values.photoURL,
  })
    .then((response) => {
      dispatch(updateUserSuccess(response));
    })
    .catch((error) => {
      dispatch(userReqFail(error));
    });
};
