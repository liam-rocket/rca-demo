import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import axios from 'axios';

import { ECommerce } from './components/templates';

function App() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const getItems = async () => {
    try {
      const resp = await axios.get('http://localhost:3004/items');
      setItems(resp.data.items);
      throw new Error();
    } catch (err) {
      console.error(err);
      setHasError(true);
      toast.error('Something went wrong');
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
      <ToastContainer>
        {hasError && <h1>Something went wrong</h1>}
        {!hasError && (
          <ECommerce
            items={items}
            getItem={getItem}
            currentItem={item}
            loading={loading}
          />
        )}
      </ToastContainer>
    </div>
  );
}

export default App;
