import { updateObject } from '../../shared/utility';
import {
  AuthActionTypes, AuthState, AUTH_SUCCESS, AUTH_LOGOUT, AUTH_FAIL, CLEAR_AUTH_ERRORS, LOADING_END, LOADING_START,
} from '../actions/actionTypes';

const initialState: AuthState = {
  error: null,
  loading: false,
  userId: null,
};

const authFail = (state, action): AuthState => updateObject(state, {
  error: action.error,
  loading: false,
});

const authSuccess = (state, action): AuthState => updateObject(state, {
  error: null,
  userId: action.userId,
});

const clearAuthErrors = (state): AuthState => updateObject(state, {
  error: null,
});

const loadingEnd = (state): AuthState => updateObject(state, {
  loading: false,
});

const loadingStart = (state): AuthState => updateObject(state, {
  error: null,
  loading: true,
});

const logout = (state): AuthState => updateObject(state, {
  userId: null,
});

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case AUTH_FAIL: return authFail(state, action);
    case AUTH_LOGOUT: return logout(state);
    case AUTH_SUCCESS: return authSuccess(state, action);
    case CLEAR_AUTH_ERRORS: return clearAuthErrors(state);
    case LOADING_END: return loadingEnd(state);
    case LOADING_START: return loadingStart(state);
    default:
      return state;
  }
};

export default authReducer;
