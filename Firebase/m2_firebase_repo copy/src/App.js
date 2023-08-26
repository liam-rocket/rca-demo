import logo from "./logo.svg";
import "./App.css";
import FruitForm from "./Component/FruitForm";
import FruitList from "./Component/FruitList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FruitForm />
        <FruitList />
      </header>
    </div>
  );
}

export default App;
