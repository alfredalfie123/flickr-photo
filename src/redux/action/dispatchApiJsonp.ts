import { CALL_API } from '../middleware/api';
import { Action } from 'redux';

interface ICallApiJsonpInfo {
  types: string[];
  params?: any;
  loading?: boolean;
}

export interface IApiActionJsonp extends Action {
  [CALL_API]: ICallApiJsonpInfo;
}

const dispatchApiJsonp = <T>(
  dispatch: any,
  { types, params, loading = false }: ICallApiJsonpInfo
) =>
  dispatch({
    type: '',
    [CALL_API]: {
      types,
      params,
      loading,
    },
  }) as Promise<T>;

export default dispatchApiJsonp;
