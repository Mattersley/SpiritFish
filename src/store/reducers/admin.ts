import { updateObject } from '../../shared/utility';

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
} from '../actions/actionTypes';

const initialState: AdminState = {
  codeSendRes: null,
  emailVerified: false,
  error: null,
  pwResetRes: null,
  verifyCodeRes: null,
};

const adminFail = (state, action): AdminState => updateObject(state, {
  error: action.error,
});

const adminReset = (state): AdminState => updateObject(state, {
  codeSendRes: null,
  error: null,
  pwResetRes: null,
  verifyCodeRes: null,
  emailVerified: false,
});

const clearAdminErrors = (state): AdminState => updateObject(state, {
  codeSendRes: null,
  error: null,
  pwResetRes: null,
  verifyCodeRes: null,
});

const codeSendSuccess = (state, action): AdminState => updateObject(state, {
  codeSendRes: action.res,
});

const passwordResetSuccess = (state, action): AdminState => updateObject(state, {
  pwResetRes: action.res,
});

const verifyCodeSuccess = (state, action): AdminState => updateObject(state, {
  verifyCodeRes: action.res,
});

const verifyEmailSuccess = (state): AdminState => updateObject(state, {
  emailVerified: true,
});

const adminReducer = (state = initialState, action: AdminActionTypes): AdminState => {
  switch (action.type) {
    case ADMIN_FAIL: return adminFail(state, action);
    case ADMIN_RESET: return adminReset(state);
    case CLEAR_ADMIN_ERRORS: return clearAdminErrors(state);
    case CODE_SEND_SUCCESS: return codeSendSuccess(state, action);
    case PASSWORD_RESET_SUCCESS: return passwordResetSuccess(state, action);
    case VERIFY_CODE_SUCCESS: return verifyCodeSuccess(state, action);
    case VERIFY_EMAIL_SUCCESS: return verifyEmailSuccess(state);
    default:
      return state;
  }
};

export default adminReducer;
