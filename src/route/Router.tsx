import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from 'screen/Home/Home';
import Login from 'screen/Login/Login';
import PrivateRoute from './PrivateRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path='/login'>
          <Login />
        </PrivateRoute>
        <PrivateRoute path='/'>
          <Home />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
