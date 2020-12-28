import reducer from 'redux/reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import apiMiddlewareJsonp from '../middleware/apiJsonp';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk, apiMiddlewareJsonp, logger))
);
export default store;

export type StoreState = ReturnType<typeof reducer>;
