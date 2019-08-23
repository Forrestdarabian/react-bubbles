import React from 'react';
import BubblePage from './components/BubblePage'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = ({ ...rest}) => {
    return <Route {...rest} render={props => {
      if (localStorage.getItem('token')) {
        return <BubblePage {...props} />;
      } else {
        return <Redirect to="/login"/>;
      }
    }}/>;
}

export default ProtectedRoute;
