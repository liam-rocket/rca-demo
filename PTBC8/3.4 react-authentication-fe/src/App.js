import './App.css';
import Students from './Students';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const LoginButton = () => {
    return <button onClick={() => loginWithRedirect()}>Log In</button>;
  };

  const LogoutButton = () => {
    return <button onClick={() => logout()}>Log Out</button>;
  };

  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? <LoginButton /> : <LogoutButton />}
        <Students />
      </header>
    </div>
  );
}

export default App;
