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

//  <div>
//    <h1>Welcome back ! {currentUser.email}</h1>
//    <Fruits />
//    <div>
//      <button onClick={handleSignOut}>Sign Out</button>-{' '}
//    </div>
//  </div>;

export default Layout;
