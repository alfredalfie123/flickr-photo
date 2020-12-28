import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps, useLocation } from 'react-router-dom';
import { UserState } from 'redux/reducer/user.reducer';
import { StoreState } from 'redux/store';
import { mainRoutes, authRoutes } from './routes';

const PrivateRoute = (props: RouteProps) => {
  const user = useSelector<StoreState, UserState>((state) => state.user);
  const location = useLocation();
  if (user.loggedIn) {
    return (
      <Route {...props}>
        {mainRoutes.includes(location.pathname) ? (
          props.children
        ) : (
          <Redirect to='/' />
        )}
      </Route>
    );
  }
  return (
    <Route {...props}>
      {authRoutes.includes(location.pathname) ? (
        props.children
      ) : (
        <Redirect to='/login' />
      )}
    </Route>
  );
};

export default PrivateRoute;
