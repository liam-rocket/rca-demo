import React, { useState, useEffect } from 'react';
import {
  fetchData,
  getSpecificData,
  deleteData,
} from '../api/realtimedatabase';

const FruitList = () => {
  const [state, setState] = useState({
    fruits: [],
  });

  // * load all data
  const getFruits = async () => {
    const handleData = (data) => {
      setState((state) => ({
        fruits: [...state.fruits, { key: data.key, val: data.val() }],
      }));
    };
    fetchData(handleData);
  };

  const handleSort = async () => {
    const { fruits } = state;
    const sortedFruits = [...fruits].sort((a, b) => (a.name > b.name ? 1 : -1));
    setState({ fruits: sortedFruits });
  };

  const handleFilter = async (e) => {
    const { fruits } = state;
    if (e.target.value.length === 0) {
      // bring back full list
    }
    const sortedFruits = fruits.filter((item) =>
      item.name.toLowercase().includes(e.target.value)
    );
    console.log(sortedFruits);
    setState({ fruits: sortedFruits });
  };

  useEffect(() => {
    getFruits();
  }, []);

  // * get specific data
  const getFruit = (fruitKey) => {
    getSpecificData(fruitKey);
  };

  // * delete data
  const deleteFruit = (fruitKey) => {
    deleteData(fruitKey);
    getFruits();
  };

  return (
    <div>
      <input label="what you want" type="text" onChange={handleFilter}></input>
      <button onClick={handleSort}>Sort</button>
      <ol>
        {state.fruits && state.fruits.length > 0 ? (
          state.fruits.map((fruitItem) => (
            <>
              <li key={fruitItem.key}>
                <div>
                  <h2>
                    {fruitItem.val.name} - {fruitItem.val.date}
                  </h2>
                  <p>{fruitItem.val.description}</p>
                </div>

                {fruitItem.val.url ? (
                  <img src={fruitItem.val.url} alt={fruitItem.val.name} />
                ) : (
                  <p>No images</p>
                )}
              </li>
              <button onClick={() => deleteFruit(fruitItem.key)}>
                delete this
              </button>
            </>
          ))
        ) : (
          <p>No fruit here</p>
        )}
      </ol>
    </div>
  );
};

export default FruitList;
