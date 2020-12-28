import { combineReducers } from 'redux';
import errorReducer from './error.reducer';
import photosReducer from './photo.reducer';
import loadingReducer from './loading.reducer';
import userReducer from './user.reducer';

const reducers = {
  loading: loadingReducer,
  error: errorReducer,
  photos: photosReducer,
  user: userReducer,
};

export default combineReducers(reducers);
