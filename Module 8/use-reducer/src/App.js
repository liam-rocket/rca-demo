import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AuthenticatedRoute from './auth';

const Home = React.lazy(() => import('./pages/Home'));

const routes = [
  {
    path: '/',
    element: <Home />,
  },
];

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={null}>
        <Router basename="/">
          <Routes>
            {routes.map((route) => (
              <Route path={route.path} exact element={route.element} />
            ))}
            <AuthenticatedRoute />
          </Routes>
        </Router>
      </React.Suspense>
    </div>
  );
}

export default App;
