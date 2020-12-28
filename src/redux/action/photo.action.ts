import { Dispatch } from 'redux';
import dispatchApiJsonp from './dispatchApiJsonp';

export const SearchPhotoKeys = {
  SEARCH_PHOTO_REQ: 'SEARCH_PHOTO_REQ',
  SEARCH_PHOTO_SUCCESS: 'SEARCH_PHOTO_SUCCESS',
  SEARCH_PHOTO_FAILURE: 'SEARCH_PHOTO_FAILURE',
};

export type GetPhotoReq = {};

export type GetPhotoRes = {};

export const searchPhoto = (dispatch: Dispatch, params = {}) =>
  dispatchApiJsonp(dispatch, {
    types: Object.keys(SearchPhotoKeys),
    params,
  });

