/* eslint-disable */
import db from './db/models/index.model.js';

db.Category.findOne({
  where: {
    name: process.argv[2],
  },
})
  .then((returnedCategory) => {
    // Docs on .create
    // https://sequelize.org/master/class/lib/model.js~Model.html#static-method-create
    return db.Item.create({
      name: process.argv[3],
      categoryId: returnedCategory.id,
    });
  })
  .then((returnedItem) => {
    console.log('success!!');
    console.log(returnedItem.id, 'returned item ID');
    console.log(returnedItem.categoryId, `returned item's category ID`);
  })
  .catch((error) => {
    console.log(error);
  });
