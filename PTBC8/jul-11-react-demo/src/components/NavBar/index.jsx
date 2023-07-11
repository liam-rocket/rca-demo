import React from 'react';

//          { name, age }
const NavBar = (prop) => {
  const { onButtonClick, logo } = prop;

  return (
    <nav id="nav-main">
      <h4 id="nav-logo">{logo}</h4>
      <button onClick={onButtonClick}>Join Us !</button>
    </nav>
  );
};

export default NavBar;

// const prop = { onButtonClick, logo };
