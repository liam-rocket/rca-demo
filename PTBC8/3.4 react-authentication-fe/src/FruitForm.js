import './App.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { logout, user, isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </button>
        <Link to="/">Students</Link>
        {isAuthenticated && (
          <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
