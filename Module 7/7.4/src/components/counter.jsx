import React, { useState } from 'react';

export default function Counter({ celsiusTemp }) {
  // Initialise count to 0
  const [count, setCount] = useState(0);

  // Callback function to update state
  const incrementCount = (event) => {
    setCount(count + 1);
    console.log(count);
  };

  console.log('Executing Counter component function');

  // Return JSX to render
  return (
    <div>
      <p>You clicked {count} times</p>
      <h1>{celsiusTemp}</h1>
      <button onClick={incrementCount}>Click me</button>
    </div>
  );
}
