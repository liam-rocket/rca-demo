import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

import { ECommerce } from './components/templates';

function App() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const getItems = async () => {
    try {
      const resp = await axios.get('http://localhost:3004/items');
      setItems(resp.data.items);
    } catch (err) {
      console.error(err);
    }
  };

  const getItem = async (itemId) => {
    try {
      setLoading(true);
      setTimeout(async () => {
        const resp = await axios.get(`http://localhost:3004/items/${itemId}`);
        setItem(resp.data.item);
        setLoading(false);
      }, 1500);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="App">
      <ECommerce
        items={items}
        getItem={getItem}
        currentItem={item}
        loading={loading}
      />
    </div>
  );
}

export default App;
