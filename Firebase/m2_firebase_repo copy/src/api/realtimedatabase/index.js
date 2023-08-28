import {
  onChildAdded,
  set,
  ref,
  push,
  get,
  child,
  remove,
} from 'firebase/database';
import { realTimeDatabase } from '../firebase';

const REALTIME_DATABASE_KEY = 'fruits';

// * load all data
const fetchData = () => {
  const fruitListRef = ref(realTimeDatabase, REALTIME_DATABASE_KEY);
  onChildAdded(fruitListRef, (data) => {
    return { key: data.key, val: data.val() };
  });
};

// * get specific data
export const getSpecificFruit = (fruitKey) => {
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
export const deleteData = (fruitKey) => {
  const fruitListRef = ref(
    realTimeDatabase,
    `${REALTIME_DATABASE_KEY}/${fruitKey}`
  );

  remove(fruitListRef).then(() => {
    console.log(`${fruitKey} removed`);
  });
};

// * create new data
export const writeData = (data) => {
  const fruitListRef = ref(realTimeDatabase, REALTIME_DATABASE_KEY);
  const newFruitRef = push(fruitListRef);

  set(newFruitRef, {
    name: data.name,
    description: data.description,
    date: new Date().toLocaleTimeString(),
  });
};

// * edit specific data
export const editData = (fruitKey, data) => {
  const fruitListRef = ref(
    realTimeDatabase,
    `${REALTIME_DATABASE_KEY}/${fruitKey}`
  );
  set(fruitListRef, {
    name: data.name,
    description: data.description,
  });
};
