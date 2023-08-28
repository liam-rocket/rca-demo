import React, { useState } from 'react';
import { writeData, editData } from '../api/realtimedatabase';
import { uploadImage } from '../api/storage';

const FruitForm = () => {
  const [state, setState] = useState({
    name: '',
    description: '',
    fileInputFile: null,
    fileInputValue: '',
  });

  // * create new data
  const createFruit = async () => {
    const url = await uploadImage(state.fileInputFile);
    writeData({ ...state, url });
    setState({
      name: '',
      description: '',
      url,
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

  const handleFileInput = (e) => {
    setState({
      ...state,
      fileInputFile: e.target.files[0],
      fileInputValue: e.target.file,
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

      <label>Image</label>
      <br />
      <input
        type="file"
        name="file"
        value={state.fileInputValue}
        onChange={handleFileInput}
      />
      <br />
      <button onClick={createFruit}>Submit Data</button>
      <button onClick={updateFruit}>Edit Data</button>
    </div>
  );
};

export default FruitForm;

// todo: #1 - gs://rocket-demo-580cc.appspot.com <-- what is this ? ;)
// todo: #2 - region selection <-- why is that important ?
