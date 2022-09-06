import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';

const Home = ({ ...props }) => {
  const { signIn, isAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/about-me';

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordchange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async () => {
    try {
      await signIn(email, password);
      navigate(from, { replace: false });
    } catch (err) {
      alert(err.params);
    }
  };

  if (isAuthenticated) {
    console.log('isAuthenticated: ', isAuthenticated);
    navigate(from, { replace: true });
  }

  return (
    <div style={{ padding: 30 }}>
      <h1>Sign in</h1>
      <h5>Log in with liam@liam.co</h5>
      <input placeholder="email" onChange={handleEmailChange}></input>
      <input placeholder="password" onChange={handlePasswordchange}></input>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default Home;
