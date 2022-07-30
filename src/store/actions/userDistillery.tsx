import firebase from 'firebase';
import axios from '../../axios/axios-distiller';

import {
  CLEAR_DISTILLERY_ERRORS,
  CREATE_DISTILLERY_SUCCESS,
  CREATE_PRODUCT_SUCCESS,
  DISTILLERY_AUTH_SUCCESS,
  DISTILLERY_AUTH_FAIL,
  DISTILLERY_LOGOUT,
  DISTILLERY_REQ_FAIL,
  GET_DISTILLERY_SUCCESS,
  DistilleryState,
  DistilleryValueTypes,
} from './actionTypes';

import { db } from '../../Firebase';

export const clearDistilleryErrors = (): { type: string } => ({
  type: CLEAR_DISTILLERY_ERRORS,
});

export const createDistillerySuccess = (response): {type: string; response: DistilleryState} => ({
  type: CREATE_DISTILLERY_SUCCESS,
  response,
});

export const createProductSuccess = (response): {type: string; response: DistilleryState} => ({
  type: CREATE_PRODUCT_SUCCESS,
  response,
});

export const distilleryAuthSuccess = (response): {type: string; response: DistilleryState} => ({
  type: DISTILLERY_AUTH_SUCCESS,
  response,
});

export const distilleryAuthFail = (error): { type: string; error: DistilleryState } => ({
  type: DISTILLERY_AUTH_FAIL,
  error,
});

export const distilleryLogout = (): { type: string } => ({
  type: DISTILLERY_LOGOUT,
});

export const distilleryReqFail = (error): { type: string; error: DistilleryState } => ({
  type: DISTILLERY_REQ_FAIL,
  error,
});

export const getDistillerySuccess = (response): {type: string; response: DistilleryState} => ({
  type: GET_DISTILLERY_SUCCESS,
  response,
});

export const checkDistilleryAuthorization = (email: string) => (dispatch) => {
  db.collection('distilleries')
    .doc('authorizedEmails')
    .collection('emails')
    .where('email', '==', `${email}`)
    .limit(1)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc) {
          const distilleryName = doc.id;
          const distilleryEmail = doc.data().email;
          dispatch(distilleryAuthSuccess(distilleryEmail));
          localStorage.setItem('distilleryEmail', distilleryEmail);
          localStorage.setItem('distilleryName', distilleryName);
        } else if (querySnapshot.empty === true) {
          dispatch(distilleryAuthFail('You are not authorized to create a distillery account. Please contact us'));
        }
      });
    });
};

export const createDistillery = ({
  distilleryName, address, telephone1, openingHours, contactName, email2, telephone2,
}: DistilleryValueTypes) => (dispatch) => {
  const user = firebase.auth().currentUser;
  const distilleryRef = db.collection('distilleries').doc(distilleryName);
  const { uid } = user;
  distilleryRef.set({
    address, email2, contactName, openingHours, telephone1, telephone2, uid,
  }, { merge: true })
    .then((response) => {
      dispatch(createDistillerySuccess(response));
    })
    .catch((error) => {
      dispatch(distilleryReqFail(error));
    });
};

export const createProduct = ({
  productName, spiritType, region, flavourProfile, description, tastingNotes, age, abv, formats, avgPrice, buyLinks,
}) => (dispatch) => {
  const token: string = localStorage.getItem('token');
  // const uid: string = localStorage.getItem('userId');
  const distilleryName: string = localStorage.getItem('distilleryName');
  const encodedName = encodeURIComponent(distilleryName);
  const encodedProductName = encodeURIComponent(productName);
  const data = {
    productName, spiritType, region, flavourProfile, description, tastingNotes, age, abv, formats, avgPrice, buyLinks,
  };

  axios.put(`/${encodedName}/products/${encodedProductName}.json?auth=${token}`, data)
    .then((response) => { dispatch(createProductSuccess(response.status)); })
    .catch((error) => { dispatch(distilleryReqFail(error)); });
};

export const getDistillery = () => (dispatch) => {
  // const token: string = localStorage.getItem('token');
  // const uid: string = localStorage.getItem('userId');
  // const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${uid}"`;
  //
  // axios.get(`.json${queryParams}`)
  //   .then((response) => {
  //     dispatch(getDistillerySuccess(response));
  //   })
  //   .catch((error) => {
  //     dispatch(distilleryReqFail(error));
  //   });
};
