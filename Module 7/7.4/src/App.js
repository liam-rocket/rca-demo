import { useState, useEffect } from 'react';
import axios from 'axios';
import Counter from './components/counter';
import ClassCounter from './components/classCoutner';
import ListItem from './components/listItem';

const handleChange = (event) => {
  console.log(event.target.value);
};

function App() {
  const [items, setItems] = useState([]);

  const handleButtonClick = async () => {
    const resp = await axios.get('http://localhost:3005/getItems');
    setItems(resp.data);
  };

  const clearItems = () => {
    setItems([]);
  };

  const getData = async () => {
    setTimeout(async () => {
      const resp = await axios.get('http://localhost:3005/getItems');
      setItems(resp.data);
    }, 500);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div style={{ padding: 15 }}>
        <h3>Counter component</h3>
        <Counter celsiusTemp={10000} />
        <br />
        <h3>Input component</h3>
        <input label="name" onChange={handleChange}></input>
        <br />
        <br />
        <h3>Class counter component</h3>
        <ClassCounter />
        <br />
        <h3>Ajax request demo!</h3>
        <button onClick={handleButtonClick}>Click me to get items !</button>
        <button onClick={clearItems}>Clear Items</button>
        <ListItem items={items} />
      </div>
    </div>
  );
}

export default App;
