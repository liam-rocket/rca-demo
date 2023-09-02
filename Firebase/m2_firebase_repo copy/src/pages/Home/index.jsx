import React, { useState, useEffect } from 'react';
import { signIn, reAuth, logOut } from '../../api/authentication';
import Fruits from '../Fruits';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

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
        setCurrentUser(authedUser);
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

  const handleSignOut = async () => {
    await logOut();
    setIsLoggedIn(false);
    setCurrentUser({});
  };

  // when first load the page, the logic in the useEffect above is executed
  // while the app is checking if the user is logged in, we will display a loading screen
  if (loading)
    return (
      <div>
        <br />
        <br />
        <br />
        Loading.....
      </div>
    );

  // if the user is already signed in, display the below page
  if (isLoggedIn)
    return (
      <div>
        <h1>Welcome back ! {currentUser.email}</h1>
        <Fruits />
        <div>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>
    );

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
