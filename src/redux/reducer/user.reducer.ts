import { AnyAction } from 'redux';
import {
  LoadLocalUserInfoKeys,
  LoginKeys,
  LogoutKeys,
} from 'redux/action/user.action';
import { authKeys } from 'shared/constant/keys.constant';
import { LoginReq, User } from 'shared/type/user.type';

export type UserState = {
  loggedIn: boolean;
  user: User | null;
};

const initial: UserState = {
  loggedIn: false,
  user: null,
};

export default function userReducer(
  state: UserState = initial,
  action: AnyAction
): UserState {
  switch (action.type) {
    case LoadLocalUserInfoKeys.LOAD_LOCAL_USER_INFO_SUCCESS: {
      const userStr = localStorage.getItem(authKeys);
      if (userStr) {
        return {
          loggedIn: true,
          user: JSON.parse(userStr),
        };
      }
      return initial;
    }
    case LoginKeys.LOGIN_SUCCESS: {
      const { email } = action.payload as LoginReq;
      localStorage.setItem(authKeys, JSON.stringify({ email }));
      return {
        loggedIn: true,
        user: {
          email,
        },
      };
    }
    case LogoutKeys.LOGOUT_SUCCESS: {
      localStorage.clear();
      return initial;
    }
    default:
      return state;
  }
}
