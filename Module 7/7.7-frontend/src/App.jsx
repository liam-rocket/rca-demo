import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

import { ECommerce } from './components/templates';

function App() {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    try {
      const resp = await axios.get('http://localhost:3004/items');
      setItems(resp.data.items);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="App">
      <ECommerce items={items} />
    </div>
  );
}

export default App;
