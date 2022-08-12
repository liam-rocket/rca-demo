import React, { Suspense } from 'react';
import { Routes } from 'react-router-dom';
import routes from './routes';
import Route from './Route';

const Auth = () => {
  return (
    // <div className="App">
    //   <Suspense fallback={<h1>Loading...</h1>}>
    //     <Routes>
    <>
      {routes.map((route, idx) => {
        return route.component ? (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            name={route.name}
            element={route.element}
          />
        ) : null;
      })}
    </>
    //     </Routes>
    //   </Suspense>
    // </div>
  );
};

export default Auth;
