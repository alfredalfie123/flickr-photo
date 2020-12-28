// import fetchJsonp from 'fetch-jsonp';
import jsonp from 'jsonp';
import { AnyAction, Middleware } from 'redux';
import { IApiActionJsonp } from 'redux/action/dispatchApiJsonp';
import { ErrorKeys } from 'redux/action/error.action';
import { LoadingKeys } from 'redux/action/loading.action';
import { queryString } from 'shared/util/handleString';

export const CALL_API = 'CALL_API';
const API_BASE_URL = 'https://api.flickr.com/services/feeds/photos_public.gne';

const callApi = async (params = {}): Promise<any> => {
  return new Promise((resolve, reject) => {
    jsonp(
      `${API_BASE_URL}?${queryString({ ...params, format: 'json' })}`, 
      { name: 'jsonFlickrFeed' },
      (err, photos) => {
      if (err) {
        return reject(err);
      }
      return resolve(photos);
    });
    // return fetchJsonp(
    //   `${API_BASE_URL}?${queryString({ ...params, format: 'json' })}`,
    //   {
    //     jsonpCallbackFunction: 'jsonFlickrFeed',
    //     // jsonpCallback: 'jsonFlickrFeed',
    //   }
    // );
  });
};

const apiMiddlewareJsonp: Middleware = (store) => (next) => async (
  action: AnyAction
): Promise<any> => {
  if (!action[CALL_API]) {
    next(action);
    return null;
  }
  const [, reqSuccess] = action[CALL_API].types;

  const { params, loading } = (action as IApiActionJsonp)[CALL_API];
  if (loading) {
    next({ type: LoadingKeys.SET_LOADING });
  }

  try {
    const response = await callApi(params);

    next({
      type: reqSuccess,
      payload: response,
    });
    if (loading) {
      next({ type: LoadingKeys.REMOVE_LOADING });
    }
    return response;
  } catch (error) {
    let messages: string[] = [];
    if (error.response) {
      let messagesResponse = error.response.data.message;
      if (typeof messagesResponse === 'string') {
        messages = [...messages, messagesResponse];
      } else {
        messages = [...messages, ...messagesResponse];
      }
    } else {
      messages = [error];
    }
    next({
      type: ErrorKeys.SET_ERROR,
      payload: {
        messages,
      },
    });
    if (loading) {
      next({ type: LoadingKeys.REMOVE_LOADING });
    }
    return null;
  }
};

export default apiMiddlewareJsonp;
