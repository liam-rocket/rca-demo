/* eslint-disable no-undef */
import {
  useLocation,
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.css';
import { getCurrentUser } from './api/authentication';

import Layout from './container';

import Home from './pages/Home';
import Fruits from './pages/Fruits';
import Register from './pages/Register';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/register',
    element: <Register />,
  },
];

const authenticatedRoutes = [
  {
    path: '/fruits',
    element: <Fruits />,
  },
];

// redirect if not logged in
function RequireAuth({ children }) {
  const user = getCurrentUser();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
          {authenticatedRoutes.map((route) => (
            <Route
              path={route.path}
              element={
                <RequireAuth>
                  <Layout> {route.element}</Layout>
                </RequireAuth>
              }
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
