/* eslint-disable no-const-assign */
import React, { useState } from 'react';

//                      prop
const SectionOne = ({ name, age }) => {
  const [clickCount, setClickCount] = useState(0);
  const [currentStudent, setCurrentStudent] = useState(null);

  const changeStudent = () => {
    const newStudent = prompt('Name of new student');
    setCurrentStudent(newStudent);
  };

  return (
    <section id="main-bg">
      <div id="landing-text">
        <h1 id="main-text">
          Hey I am {name} age {age}
        </h1>
        <h4 id="main-subtext">a web developer</h4>

        <button onClick={() => setClickCount(clickCount + 1)}>
          Click Me !
        </button>
        <h4>{clickCount}</h4>

        {/* {currentStudent ? <h4>Current Student: {currentStudent}</h4> : <></>} */}
        {currentStudent && <h4>Current Student: {currentStudent}</h4>}
        <button onClick={changeStudent}>Change Student</button>
      </div>
    </section>
  );
};

export default SectionOne;
