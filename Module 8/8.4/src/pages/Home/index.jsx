import React from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>This is the homepage</h1>
      <ul>
        <li>
          <a href="/reading">Reading</a>
        </li>
        <li>
          <a href="/about-us">About us</a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
