import { updateObject } from '../../shared/utility';
import {
  CREATE_USER_SUCCESS, RESET_ERROR_AND_RESPONSE, UPDATE_USER_SUCCESS, USER_REQ_FAIL, UserActionTypes, UserState,
} from '../actions/actionTypes';

const initialState: UserState = {
  error: null,
  response: null,
};

const createUserSuccess = (state, action): UserState => updateObject(state, {
  response: action.response,
});

const resetErrorAndResponse = (state): UserState => updateObject(state, {
  error: null,
  response: null,
});

const updateUserSuccess = (state, action): UserState => updateObject(state, {
  response: action.response,
});

const userReqFail = (state, action): UserState => updateObject(state, {
  error: action.error,
});

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case CREATE_USER_SUCCESS: return createUserSuccess(state, action);
    case RESET_ERROR_AND_RESPONSE: return resetErrorAndResponse(state);
    case UPDATE_USER_SUCCESS: return updateUserSuccess(state, action);
    case USER_REQ_FAIL: return userReqFail(state, action);
    default:
      return state;
  }
};

export default userReducer;
