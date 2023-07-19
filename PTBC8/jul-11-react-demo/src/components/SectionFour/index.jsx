import React, { useState } from 'react';

const SectionFour = () => {
  const [showText, setShowText] = useState(null);

  const handleHover = () => {
    setShowText(!showText); // if true, set to false, vice versa
  };

  // const handleShowText = () => {
  //   setShowText(true); // changes showText to true, make the text appear
  // };

  // const handleHideText = () => {
  //   setShowText(!showText);
  // };

  const hanldeOnBlur = () => {
    alert('on blur has triggered');
  };

  return (
    <section id="secondary-bg">
      <h1 id="secondary-text">On mouse enter events</h1>
      <div id="boxes-wrapper">
        <div
          className="portfolio-box"
          // onMouseEnter={handleShowText}
          // onMouseLeave={handleHideText}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          {/* is showText a falsy value ? */}
          {showText && <h1 id="secondary-text">You have hovered</h1>}
        </div>
      </div>
      <div id="boxes-wrapper">
        <input
          type="text"
          placeholder="demo for onBlur"
          onBlur={hanldeOnBlur}
        ></input>
      </div>
    </section>
  );
};

export default SectionFour;
