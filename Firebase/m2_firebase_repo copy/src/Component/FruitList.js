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
      // todo: Zac -> https://firebase.google.com/docs/database/admin/save-data#node.js
      console.log('called'); // todo: <-- this is called when creating new obj
      setState((state) => ({
        fruits: [...state.fruits, { key: data.key, val: data.val() }],
      }));
    };
    fetchData(handleData);
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
