import './App.css';
import NavBar from './components/NavBar';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';

function App() {
  const onButtonClick = () => {
    alert('Hello !');
  };

  return (
    <div className="App">
      {/* passing in values to components as a prop */}
      <NavBar onButtonClick={onButtonClick} logo="James" />
      <SectionOne name="Vanessa" age={28} />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}

export default App;
