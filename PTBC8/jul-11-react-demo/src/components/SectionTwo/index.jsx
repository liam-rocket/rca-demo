import React from 'react';

const SectionTwo = ({ children, boxes }) => {
  return (
    <section id="secondary-bg">
      <h1 id="secondary-text">These are some of my projects</h1>
      <div id="boxes-wrapper">{children}</div>
      {/* <div id="boxes-wrapper">
        <div className="portfolio-box"></div>
        <div className="portfolio-box"></div>
        <div className="portfolio-box"></div>
        <div className="portfolio-box"></div>
        <div className="portfolio-box"></div>
        <div className="portfolio-box"></div>
      </div> */}
    </section>
  );
};

export default SectionTwo;
