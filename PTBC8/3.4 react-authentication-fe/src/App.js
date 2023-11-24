import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Students from './pages/Students';
import Loading from './pages/Loading';
import { useAuth0 } from '@auth0/auth0-react';

const authenticatedRoutes = [
  {
    path: '/',
    element: <Students />,
  },
];

// redirect if not logged in
function RequireAuth({ children }) {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const LogoutButton = () => {
    return <button onClick={() => logout()}>Log Out</button>;
  };

  if (!isAuthenticated) {
    // if there is no currently signed in user,
    loginWithRedirect();
  }
  return (
    <>
      {isAuthenticated && <LogoutButton />}
      {children}
    </>
  );
}

function App() {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<Loading />}>
          <Router>
            <Routes>
              {authenticatedRoutes.map((route) => (
                <Route
                  path={route.path}
                  element={<RequireAuth>{route.element}</RequireAuth>}
                />
              ))}
            </Routes>
          </Router>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
