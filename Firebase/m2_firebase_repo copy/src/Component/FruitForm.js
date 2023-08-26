import React, { useState } from 'react';
import { push, ref, set } from 'firebase/database';
import { realTimeDatabase } from '../firebase';

const REALTIME_DATABASE_KEY = 'fruits';

const FruitForm = () => {
  const [state, setState] = useState({
    name: '',
    description: '',
  });

  // * create new data
  const writeData = () => {
    const fruitListRef = ref(realTimeDatabase, REALTIME_DATABASE_KEY);
    const newFruitRef = push(fruitListRef);

    set(newFruitRef, {
      name: state.name,
      description: state.description,
      date: new Date().toLocaleTimeString(),
    });

    setState({
      name: '',
      description: '',
    });
  };

  // * edit specific data
  const editData = (fruitKey) => {
    const fruitListRef = ref(
      realTimeDatabase,
      `${REALTIME_DATABASE_KEY}/${fruitKey}`
    );
    set(fruitListRef, {
      name: state.name,
      description: state.description,
    });

    setState({
      name: '',
      description: '',
    });
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Fruit Form</h1>

      <label>Name</label>
      <br />
      <input
        type="text"
        name="name"
        value={state.name}
        placeholder="Insert Fruit Name"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <label>Description</label>
      <br />
      <input
        type="text"
        name="description"
        value={state.description}
        placeholder="Insert Fruit Description"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <button onClick={writeData}>Submit Data</button>
      <button onClick={editData}>Edit Data</button>
    </div>
  );
};

export default FruitForm;
