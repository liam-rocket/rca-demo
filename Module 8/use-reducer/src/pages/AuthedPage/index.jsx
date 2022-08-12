import React from 'react';
import { useAuth } from '../../hooks/use-auth';

const AboutUs = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>This is About Us</h1>
      <p>Hi my name is {user.firstName}. I got to school by bus</p>
    </div>
  );
};

export default AboutUs;
