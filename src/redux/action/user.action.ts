import { LoginReq } from 'shared/type/user.type';

export const LoginKeys = {
  LOGIN_REQ: 'LOGIN_REQ',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
};

export const login = (loginReq: LoginReq) => ({
  type: LoginKeys.LOGIN_SUCCESS,
  payload: loginReq,
});

export const LogoutKeys = {
  LOGOUT_REQ: 'LOGOUT_REQ',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'LOGOUT_FAILURE',
};

export const logout = () => ({
  type: LogoutKeys.LOGOUT_SUCCESS,
});

export const LoadLocalUserInfoKeys = {
  LOAD_LOCAL_USER_INFO_REQ: 'LOAD_LOCAL_USER_INFO_REQ',
  LOAD_LOCAL_USER_INFO_SUCCESS: 'LOAD_LOCAL_USER_INFO_SUCCESS',
  LOAD_LOCAL_USER_INFO_FAILURE: 'LOAD_LOCAL_USER_INFO_FAILURE',
};

export const loadLocalUserInfo = () => ({
  type: LoadLocalUserInfoKeys.LOAD_LOCAL_USER_INFO_SUCCESS,
});
