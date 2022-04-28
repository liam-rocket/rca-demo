import db from './db/models/index.model.js';

db.Category.findOne({
  where: {
    name: [process.argv[2]],
  },
})
  // When we omit curly braces in arrow functions, the return keyword is implied.
  .then((category) => category.getItems())
  .then((categoryItems) =>
    console.log(categoryItems.map((categoryItem) => categoryItem.name))
  )
  .catch((error) => console.log(error));
