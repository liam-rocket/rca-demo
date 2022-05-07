/* eslint-disable no-console */
import db from './db/models/index.model.js';

db.Item.create({
  name: process.argv[2],
})
  .then((item) => {
    console.log('success!');
    console.log(item);
    console.log(item.name);

    item.update({ name: 'Aqif' });
  })
  .catch((error) => console.log(error));

//

const createItem = async (name) => {
  try {
    const item = await db.Item.create({
      name: process.argv[2],
    });
    console.log('success!');
    console.log(item);
    console.log(item.name);
  } catch (error) {
    console.error(error);
  }
};

await createItem('liam');
