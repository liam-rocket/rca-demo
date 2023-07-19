import React from 'react';

const SectionThree = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section id="secondary-bg">
      <h1 id="secondary-text">Rendering via an Array / List</h1>
      <div id="boxes-wrapper">
        <ul>
          {numbers.map((number, index) => {
            return (
              <li key={index}>
                Index: {index} - Number: {number}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SectionThree;
