import { logOut } from '../api/authentication';

const Layout = ({ children }) => {
  const handleSigOut = async () => {
    await logOut();
    return (window.location.href = '/');
  };

  return (
    <div>
      <h1>Welcome back ! </h1>
      {children}
      <div>
        <button onClick={handleSigOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default Layout;
