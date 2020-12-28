import { AnyAction } from 'redux';
import { IPhoto } from 'shared/type/photo.type';
import { SearchPhotoKeys } from 'redux/action/photo.action';

export type PhotoState = IPhoto[];

const initial: IPhoto[] = [];

export default function photosReducer(
  state: IPhoto[] = initial,
  action: AnyAction
): IPhoto[] {
  switch (action.type) {
    case SearchPhotoKeys.SEARCH_PHOTO_SUCCESS:
      const { payload } = action;
      return payload.items;
    default:
      return state;
  }
}
