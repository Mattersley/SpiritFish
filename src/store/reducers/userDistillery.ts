import { updateObject } from '../../shared/utility';
import {
  CLEAR_DISTILLERY_ERRORS,
  CREATE_DISTILLERY_SUCCESS,
  CREATE_PRODUCT_SUCCESS,
  DISTILLERY_AUTH_SUCCESS,
  DISTILLERY_AUTH_FAIL,
  DISTILLERY_LOGOUT,
  DISTILLERY_REQ_FAIL,
  DistilleryActionTypes,
  DistilleryState,
  GET_DISTILLERY_SUCCESS,
} from '../actions/actionTypes';

const initialState: DistilleryState = {
  authorizedEmail: null,
  response: null,
  error: null,
};

const clearDistilleryErrors = (state): DistilleryState => updateObject(state, {
  error: null,
});

const createDistillerySuccess = (state, action): DistilleryState => updateObject(state, {
  response: action.response,
});

const createProductSuccess = (state, action): DistilleryState => updateObject(state, {
  response: action.response,
});

const distilleryAuthSuccess = (state, action): DistilleryState => updateObject(state, {
  authorizedEmail: action.response,
});

const distilleryAuthFail = (state, action): DistilleryState => updateObject(state, {
  error: action.error,
});

const distilleryLogout = (state): DistilleryState => updateObject(state, {
  authorizedEmail: null,
  error: null,
  response: null,
});

const distilleryReqFailed = (state, action): DistilleryState => updateObject(state, {
  error: action.error,
});

const getDistillerySuccess = (state, action): DistilleryState => updateObject(state, {
  response: action.response,
});

const distilleryReducer = (state = initialState, action: DistilleryActionTypes): DistilleryState => {
  switch (action.type) {
    case CLEAR_DISTILLERY_ERRORS: return clearDistilleryErrors(state);
    case CREATE_DISTILLERY_SUCCESS: return createDistillerySuccess(state, action);
    case CREATE_PRODUCT_SUCCESS: return createProductSuccess(state, action);
    case DISTILLERY_AUTH_SUCCESS: return distilleryAuthSuccess(state, action);
    case DISTILLERY_AUTH_FAIL: return distilleryAuthFail(state, action);
    case DISTILLERY_LOGOUT: return distilleryLogout(state);
    case DISTILLERY_REQ_FAIL: return distilleryReqFailed(state, action);
    case GET_DISTILLERY_SUCCESS: return getDistillerySuccess(state, action);
    default:
      return state;
  }
};

export default distilleryReducer;
