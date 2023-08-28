import React, { useState } from 'react';
import { writeData, editData } from '../api/realtimedatabase';

const FruitForm = () => {
  const [state, setState] = useState({
    name: '',
    description: '',
  });

  // * create new data
  const createFruit = () => {
    writeData(state);
    setState({
      name: '',
      description: '',
    });
  };

  // * edit specific data
  const updateFruit = (fruitKey) => {
    editData(fruitKey, state);
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
      <button onClick={createFruit}>Submit Data</button>
      <button onClick={updateFruit}>Edit Data</button>
    </div>
  );
};

export default FruitForm;
