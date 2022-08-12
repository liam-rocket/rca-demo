import React, { useReducer } from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {
  const params = useParams();

  // First render will create the state, and it will
  // persist through future renders
  const [sum, dispatch] = useReducer((state, action) => {
    return state + action;
  }, 0);
  const [test, twoDispatch] = useReducer((state, action) => {
    return state + action;
  }, 0);

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
      {sum}
      <button onClick={() => dispatch(1)}>Add 1</button>
    </div>
  );
};

export default Home;
