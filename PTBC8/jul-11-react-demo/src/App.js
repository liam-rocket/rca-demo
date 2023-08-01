import './App.css';
import NavBar from './components/NavBar';
// import SectionOne from './components/SectionOne';
// import SectionTwo from './components/SectionTwo';
// import SectionThree from './components/SectionThree';
// import SectionFour from './components/SectionFour';
// import SectionFive from './components/SectionFive';

import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive,
  ApiDemo,
} from './components';

// import * as Sections from './components';

function App() {
  const onButtonClick = () => {
    alert('Hello !');
  };

  const boxes = (
    <>
      <div className="portfolio-box"></div>
      <div className="portfolio-box"></div>
      <div className="portfolio-box"></div>
      <div className="portfolio-box"></div>
      <div className="portfolio-box"></div>
      <div className="portfolio-box"></div>
    </>
  );

  return (
    <div className="App">
      {/* passing in values to components as a prop */}
      <NavBar onButtonClick={onButtonClick} logo="Rocket Academy" />
      <SectionOne name="Vanessa" age={28} />
      {/* <SectionTwo> */}
      <SectionTwo>{boxes}</SectionTwo>
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <ApiDemo />
    </div>
  );
}

export default App;
