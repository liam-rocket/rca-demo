/* eslint-disable no-undef */
import {
  useLocation,
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import './App.css';
import { getCurrentUser } from './api/authentication';

import Layout from './container';

import Home from './pages/Home';
import Fruits from './pages/Fruits';
import Register from './pages/Register';
import Post from './pages/Post';

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
  {
    path: '/posts/:postId',
    element: <Post />,
  },
];

// redirect if not logged in
function RequireAuth({ children }) {
  const user = getCurrentUser();
  const location = useLocation();

  if (!user) {
    // if there is no currently signed in user,
    return <Navigate to="/" state={{ from: location }} replace={true} />;
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
              element={<RequireAuth>{route.element}</RequireAuth>}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
