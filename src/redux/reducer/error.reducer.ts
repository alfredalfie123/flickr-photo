import { ErrorKeys } from 'redux/action/error.action';
import { AnyAction } from 'redux';

export interface ErrorState {
  error: null | { messages: string[] };
}

const initial = {
  error: null,
};

export default function errorReducer(
  state: ErrorState = initial,
  action: AnyAction
): ErrorState {
  switch (action.type) {
    case ErrorKeys.SET_ERROR: {
      return { error: action.payload };
    }
    case ErrorKeys.CLEAR_ERROR: {
      return { error: null };
    }
    default:
      return state;
  }
}
