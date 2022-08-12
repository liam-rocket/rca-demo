import React from 'react';
import { useAuth } from '../../hooks/use-auth';

const AboutUs = () => {
  const { user, logout } = useAuth();
  return (
    <div style={{ padding: 30 }}>
      <h1>About me</h1>
      <p>
        Hi my name is {user.firstName} {user.lastName}. I go to school by bus
      </p>
      <button onClick={logout}>Sign out</button>
    </div>
  );
};

export default AboutUs;
