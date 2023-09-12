import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Loading from '../Loading';

const Home = () => {
  const { isAuthenticated, loading, signIn, reAuth } = useAuth();

  // const [isLoggedIn, setIsLoggedIn] = useState(false); // ! replaced by isAuthenticated

  const location = useLocation();
  const { from } = location.state || {
    from: { pathname: '/' },
  };

  // const [loading, setLoading] = useState(false); // !replaced by loading

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    reAuth();

    // ! replaced
    // const checkIfLoggedIn = (authedUser) => {
    //   if (authedUser) {
    //     // * user !== null / undefined, it means the user is signed in
    //     setIsLoggedIn(true);
    //     setLoading(false);
    //   } else {
    //     setLoading(false);
    //     // User is signed out
    //     return null;
    //   }
    // };
  }, []);

  const signInUser = async () => {
    await signIn(state.email, state.password);
    setState({
      email: '',
      password: '',
    });

    // ! replaced
    // if (user) {
    //   setIsLoggedIn(true);
    //   setState({
    //     email: '',
    //     password: '',
    //   });
    // }
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setState({
      ...state,
      [name]: value,
    });
  };

  // todo: new routing, if accessing '/' while authenticated
  const isHomePage = from.pathname === '/';
  if (isHomePage) {
    return <Navigate to="/fruits" />;
  }

  // when first load the page, the logic in the useEffect above is executed
  // while the app is checking if the user is logged in, we will display a loading screen
  if (loading) return <Loading />;

  // * redirect if logged in
  // if the user is already signed in, display the below page
  if (isAuthenticated) {
    return <Navigate to={{ ...from }} />;
  }

  // if the user is NOT signed in, make them sign in
  return (
    <div>
      <h1>Sign In</h1>
      <br />
      <label>Email</label>
      <br />
      <input
        type="text"
        name="email"
        value={state.name}
        placeholder="Enter Email"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <label>Password</label>
      <br />
      <input
        type="text"
        name="password"
        value={state.password}
        placeholder="Enter Password"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <br />
      <button onClick={signInUser}>Sign In</button>
      <br />
      <div>
        Don't have an account ? <a href="/register">Register</a>
      </div>
    </div>
  );
};

export default Home;
