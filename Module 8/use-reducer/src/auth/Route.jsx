import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';

const AuthenticatedRoute = ({ element: Component, location, ...rest }) => {
  const { isAuthenticated } = useAuth();

  console.log('isAuthenticated', location);

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            <React.Fragment>
              <Component {...props} />
            </React.Fragment>
          ) : (
            <Navigate
              to={{ pathname: '/', state: { from: { ...location } } }}
            />
          )
        }
      />
    </>
  );
};

export default AuthenticatedRoute;
