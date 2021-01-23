/* AUTH TYPES */
export interface AuthState {
    authRedirectPath?: string,
    error?: string,
    loading?: boolean,
    token?: string,
    userId?: string | null,
}

export interface AuthValueTypes {
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    username: string,
    postcode?: string
}

export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const CLEAR_AUTH_ERRORS = 'CLEAR_AUTH_ERRORS';
export const LOADING_END = 'LOADING_END';
export const LOADING_START = 'LOADING_START';

interface AuthFailAction {
    type: typeof AUTH_FAIL,
    payload: AuthState
}

interface AuthLogoutAction {
    type: typeof AUTH_LOGOUT,
}

interface AuthSuccessAction {
    type: typeof AUTH_SUCCESS,
    payload: AuthState
}

interface ClearAuthErrorsAction {
    type: typeof CLEAR_AUTH_ERRORS,
}

interface LoadingEndAction {
    type: typeof LOADING_END
}

interface LoadingStartAction {
    type: typeof LOADING_START
}

export type AuthActionTypes = AuthFailAction | AuthLogoutAction| AuthSuccessAction| ClearAuthErrorsAction | LoadingEndAction | LoadingStartAction

/* ADMIN TYPES */
export interface AdminState {
    codeSendRes?: number,
    emailVerified?: boolean,
    error?: string,
    pwResetRes?: number,
    verifyCodeRes?: number,
}

export const ADMIN_FAIL = 'ADMIN_FAIL';
export const ADMIN_RESET = 'ADMIN_RESET';
export const CLEAR_ADMIN_ERRORS = 'CLEAR_ADMIN_ERRORS';
export const CODE_SEND_SUCCESS = 'CODE_SEND_SUCCESS';
export const PASSWORD_RESET_SUCCESS = 'PASSWORD_RESET_SUCCESS';
export const VERIFY_CODE_SUCCESS = 'VERIFY_CODE_SUCCESS';
export const VERIFY_EMAIL_SUCCESS = 'VERIFY_EMAIL_SUCCESS';

interface AdminFailAction {
    type: typeof ADMIN_FAIL,
    payload: AdminState
}

interface AdminResetAction {
    type: typeof ADMIN_RESET,
}

interface ClearAdminErrorsAction {
    type: typeof CLEAR_ADMIN_ERRORS,
}

interface CodeSendSuccessAction {
    type: typeof CODE_SEND_SUCCESS,
    payload: AdminState
}

interface PasswordResetSuccessAction {
    type: typeof PASSWORD_RESET_SUCCESS,
    payload: AdminState
}

interface VerifyCodeSuccessAction {
    type: typeof VERIFY_CODE_SUCCESS,
    payload: AdminState
}

interface VerifyEmailSuccessAction {
    type: typeof VERIFY_EMAIL_SUCCESS,
    payload: AdminState
}

export type AdminActionTypes = AdminFailAction | AdminResetAction | ClearAdminErrorsAction | CodeSendSuccessAction | PasswordResetSuccessAction | VerifyCodeSuccessAction | VerifyEmailSuccessAction

/* USER TYPES */
export interface UserState {
    error?: string,
    response?: string,
}

export interface UserValueTypes {
    firstname: string,
    lastname: string,
    username: string,
    postcode?: string
}

export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const RESET_ERROR_AND_RESPONSE = 'RESET_ERROR_AND_RESPONSE';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const USER_REQ_FAIL = 'USER_REQ_FAIL';

interface CreateUserSuccessAction {
    type: typeof CREATE_USER_SUCCESS,
}

interface GetUserSuccessAction {
    type: typeof GET_USER_SUCCESS,
}

interface DeleteUserSuccessAction {
    type: typeof DELETE_USER_SUCCESS,
}

interface ResetErrorAndResponseAction {
    type: typeof RESET_ERROR_AND_RESPONSE,
}

interface UpdateUserSuccessAction {
    type: typeof UPDATE_USER_SUCCESS,
}

interface UserReqFailAction {
    type: typeof USER_REQ_FAIL,
    payload: UserState
}

export type UserActionTypes = CreateUserSuccessAction | GetUserSuccessAction | DeleteUserSuccessAction | ResetErrorAndResponseAction | UpdateUserSuccessAction | UserReqFailAction

/* DISTILLERY TYPES */
export interface DistilleryState {
    authorizedEmail: string,
    error?: string,
    response?: string,
}

export interface DistilleryValueTypes {
    email?: string,
    distilleryName?: string,
    address: string,
    telephone1: number,
    openingHours?: string,
    contactName: string,
    email2?: string,
    telephone2?: number,
}

export const CLEAR_DISTILLERY_ERRORS = 'CLEAR_DISTILLERY_ERRORS';
export const CREATE_DISTILLERY_SUCCESS = 'CREATE_DISTILLERY_SUCCESS';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const DISTILLERY_AUTH_SUCCESS = 'DISTILLERY_AUTH_SUCCESS';
export const DISTILLERY_AUTH_FAIL = 'DISTILLERY_AUTH_FAIL';
export const DISTILLERY_LOGOUT = 'DISTILLERY_LOGOUT';
export const DISTILLERY_REQ_FAIL = 'DISTILLERY_REQ_FAIL';
export const GET_DISTILLERY_SUCCESS = 'GET_DISTILLERY_SUCCESS';

interface ClearDistilleryErrorsAction {
    type: typeof CLEAR_DISTILLERY_ERRORS
}

interface CreateDistillerySuccessAction {
    type: typeof CREATE_DISTILLERY_SUCCESS,
    payload: DistilleryState
}

interface CreateProductSuccessAction {
    type: typeof CREATE_PRODUCT_SUCCESS,
    payload: DistilleryState
}

interface DistilleryAuthSuccessAction {
    type: typeof DISTILLERY_AUTH_SUCCESS,
    payload: DistilleryState
}

interface DistilleryAuthFailAction {
    type: typeof DISTILLERY_AUTH_FAIL,
    payload: DistilleryState
}

interface DistilleryLogoutAction {
    type: typeof DISTILLERY_LOGOUT,
}

interface DistilleryReqFailAction {
    type: typeof DISTILLERY_REQ_FAIL,
    payload: DistilleryState
}

interface GetDistillerySuccessAction {
    type: typeof GET_DISTILLERY_SUCCESS,
    payload: DistilleryState
}

export type DistilleryActionTypes = ClearDistilleryErrorsAction | CreateDistillerySuccessAction | CreateProductSuccessAction | DistilleryAuthSuccessAction | DistilleryAuthFailAction | DistilleryLogoutAction | DistilleryReqFailAction | GetDistillerySuccessAction
