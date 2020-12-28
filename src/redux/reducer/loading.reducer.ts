import { LoadingKeys } from 'redux/action/loading.action';
import { Action } from 'redux';

export interface LoadingState {
  isLoading: boolean;
}

const initial = {
  isLoading: false,
};

export default function loadingReducer(
  state: LoadingState = initial,
  action: Action
): LoadingState {
  switch (action.type) {
    case LoadingKeys.SET_LOADING:
      return { isLoading: true };
    case LoadingKeys.REMOVE_LOADING:
      return { isLoading: false };
    default:
      return state;
  }
}
