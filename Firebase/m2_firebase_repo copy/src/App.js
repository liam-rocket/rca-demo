/* eslint-disable no-undef */
import { Suspense, lazy } from 'react';
import {
  useLocation,
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.css';
import { useAuth } from './hooks/useAuth';
import Loading from './pages/Loading';

// haha, this is git :)

/**
 * https://react.dev/reference/react/lazy
 * lazy lets you defer loading component’s code until it is rendered for the first time.
 */
const Home = lazy(() => import('./pages/Home'));
const Fruits = lazy(() => import('./pages/Fruits'));
const Register = lazy(() => import('./pages/Register'));
const Post = lazy(() => import('./pages/Post'));

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
  // const user = getCurrentUser(); // ! removed this, replaced by useAuth()

  const { isAuthenticated } = useAuth();

  console.log('haha, got you!');

  const location = useLocation();

  console.log('hello, creating a merge conflict');

  if (!isAuthenticated) {
    // if there is no currently signed in user,
    return <Navigate to="/" state={{ from: location }} replace={true} />;
  }
  return children;
}

function App() {
  return (
    <div className="App">
      {/* <Suspense> lets you display a fallback until its children have finished loading. */}
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </div>
  );
}

export default App;
