import db from './db/models/index.model.js';

db.Category.findOne({
  where: {
    name: ['fish'],
  },
})
  // When we omit curly braces in arrow functions, the return keyword is implied.
  .then((category) => {
    return category.getItems();
  })
  .then((categoryItems) => {
    console.log(categoryItems);
    return;
    console.log(categoryItems.map((categoryItem) => categoryItem.name));
  })
  .catch((error) => console.log(error));
