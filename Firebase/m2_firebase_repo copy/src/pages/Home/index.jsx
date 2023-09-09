import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { signIn, reAuth } from '../../api/authentication';

const Home = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  const { from } = location.state || {
    from: { pathname: '/' },
  };

  const [loading, setLoading] = useState(false);

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    const checkIfLoggedIn = (authedUser) => {
      if (authedUser) {
        // * user !== null / undefined, it means the user is signed in
        setIsLoggedIn(true);
        setLoading(false);
      } else {
        setLoading(false);
        // User is signed out
        return null;
      }
    };

    setLoading(true);
    reAuth(checkIfLoggedIn);
  }, []);

  const signInUser = async () => {
    const user = await signIn(state.email, state.password);
    if (user) {
      setIsLoggedIn(true);
      setState({
        email: '',
        password: '',
      });
    }
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setState({
      ...state,
      [name]: value,
    });
  };

  // when first load the page, the logic in the useEffect above is executed
  // while the app is checking if the user is logged in, we will display a loading screen
  if (loading) return <div style={{ marginTop: '50px' }}>Loading.....</div>;

  // * redirect if logged in
  // if the user is already signed in, display the below page
  if (isLoggedIn) return <Navigate to={{ ...from }} />;
  // if (isLoggedIn) return <Navigate to="/posts" />;

  // if the user is NOT signed in, make them sign in
  return (
    <div>
      <h1> HELLOOOO!!!</h1>
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
