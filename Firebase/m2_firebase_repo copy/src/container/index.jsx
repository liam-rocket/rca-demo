import { useAuth } from '../hooks/useAuth';

const Layout = ({ children }) => {
  const { user, logout } = useAuth();

  const handleSigOut = async () => {
    await logout();
    return (window.location.href = '/');
  };

  return (
    <div>
      <h1>Welcome back ! {user.email}</h1>
      {children}
      <div>
        <button onClick={handleSigOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default Layout;
