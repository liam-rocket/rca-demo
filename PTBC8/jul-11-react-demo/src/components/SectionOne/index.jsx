import React from 'react';

//                       prop
const SectionOne = ({ name, age }) => {
  return (
    <section id="main-bg">
      <div id="landing-text">
        <h1 id="main-text">
          Hey I am {name} age {age}
        </h1>
        <h4 id="main-subtext">a web developer</h4>
      </div>
    </section>
  );
};

export default SectionOne;

// const { onButtonClick, logo } = prop;
