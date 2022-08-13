import React from 'react';
import {
  useLocation,
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { useAuth } from './hooks/use-auth';

const Home = React.lazy(() => import('./pages/Home'));
const AboutMe = React.lazy(() => import('./pages/AboutMe'));

const routes = [
  {
    path: '/',
    element: <Home />,
  },
];

const authenticatedRoutes = [
  {
    path: '/about-me',
    element: <AboutMe />,
  },
];

function RequireAuth({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={null}>
        <Router basename="/">
          <Routes>
            {routes.map((route) => (
              <Route path={route.path} exact element={route.element} />
            ))}
            {authenticatedRoutes.map((route) => (
              <Route
                path={route.path}
                exact
                element={<RequireAuth>{route.element}</RequireAuth>}
              />
            ))}
          </Routes>
        </Router>
      </React.Suspense>
    </div>
  );
}

export default App;
