import React, { useState, useReducer, useEffect } from 'react';
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

  const [isJs, setIsJs] = useState(true);
  const [questions, setQuestions] = useState({});

  const importQuestions = async () => {
    if (isJs) {
      const questions = await import('./js.json');
      setQuestions(questions.default);
    } else {
      setQuestions(await import('./react.json').default);
    }
  };

  useEffect(() => {
    importQuestions();
  }, []);

  console.log('questions: ', questions);

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
