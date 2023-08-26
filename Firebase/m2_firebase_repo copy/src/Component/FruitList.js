import React, { useState, useEffect } from 'react';

import { onChildAdded, ref, get, child, remove } from 'firebase/database';
import { realTimeDatabase } from '../firebase';

const REALTIME_DATABASE_KEY = 'fruits';

const FruitList = () => {
  const [state, setState] = useState({
    fruits: [],
  });

  useEffect(() => {
    const fruitListRef = ref(realTimeDatabase, REALTIME_DATABASE_KEY);

    onChildAdded(fruitListRef, (data) => {
      console.log('data: ', data);
      console.log('read data: ', data.key, data.val());

      setState((state) => ({
        fruits: [...state.fruits, { key: data.key, val: data.val() }],
      }));
    });
  }, []);

  // * get specific data
  const getSpecificFruit = (fruitKey) => {
    const fruitListRef = ref(realTimeDatabase, REALTIME_DATABASE_KEY);
    get(child(fruitListRef, `${fruitKey}`))
      .then((data) => {
        if (data.exists()) {
          console.log(data.val());
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // * delete data
  const deleteData = (fruitKey) => {
    const fruitListRef = ref(
      realTimeDatabase,
      `${REALTIME_DATABASE_KEY}/${fruitKey}`
    );

    remove(fruitListRef).then(() => {
      console.log(`${fruitKey} removed`);
    });
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
              <button onClick={() => deleteData(fruitItem.key)}>
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
