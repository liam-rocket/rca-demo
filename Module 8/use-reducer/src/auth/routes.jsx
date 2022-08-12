import React from 'react';

const AuthedPage = React.lazy(() => import('../pages/AuthedPage'));

const authenticatedRoutes = [
  {
    path: '/authed-page',
    name: 'authed-page',
    exact: undefined,
    element: <AuthedPage />,
  },
];

export default authenticatedRoutes;
