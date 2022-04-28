import db from './db/models/index.model.js';

db.Item.findOne({
  where: {
    name: [process.argv[2]],
  },
})
  .then((item) => item.getCategory())
  .then((itemCategory) => console.log('found: ', itemCategory.name))
  .catch((error) => console.log(error));
