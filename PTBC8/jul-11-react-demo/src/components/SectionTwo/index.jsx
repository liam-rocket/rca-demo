import React from 'react';

const SectionTwo = ({ children }) => {
  return (
    <section id="secondary-bg">
      <h1 id="secondary-text">These are some of my projects</h1>
      <div id="boxes-wrapper">{children}</div>
    </section>
  );
};

export default SectionTwo;
