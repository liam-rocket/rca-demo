import React, { useState, useEffect } from 'react';
import {
  fetchData,
  getSpecificFruit,
  deleteData,
} from '../api/realtimedatabase';

const FruitList = () => {
  const [state, setState] = useState({
    fruits: [],
  });

  // * load all data
  const loadData = async () => {
    const fruitData = await fetchData();
    setState({ fruits: [...state.fruits, fruitData] });
  };

  useEffect(() => {
    loadData();
  }, []);

  // * get specific data
  const getFruit = (fruitKey) => {
    getSpecificFruit(fruitKey);
  };

  // * delete data
  const deleteFruit = (fruitKey) => {
    deleteData(fruitKey);
    loadData();
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
