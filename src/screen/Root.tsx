import { Loading } from 'component';
import ErrorBox from 'component/ErrorBox/ErrorBox';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadLocalUserInfo } from 'redux/action/user.action';
import { ErrorState } from 'redux/reducer/error.reducer';
import { LoadingState } from 'redux/reducer/loading.reducer';
import { StoreState } from 'redux/store';
import Router from 'route/Router';

type StateToProps = {
  loadingState: LoadingState;
  errorState: ErrorState;
};

const Root = () => {
  const stateToProps = useSelector<StoreState, StateToProps>((state) => ({
    loadingState: state.loading,
    errorState: state.error,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadLocalUserInfo());
  }, []);

  return (
    <>
      {stateToProps.loadingState.isLoading && <Loading />}
      {stateToProps.errorState.error && (
        <ErrorBox messages={stateToProps.errorState.error.messages} />
      )}
      <Router />
    </>
  );
};

export default Root;
