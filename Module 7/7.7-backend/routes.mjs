import db from './models/index.mjs';

import initItemsController from './controllers/items.mjs';

export default function routes(app) {
  const ItemsController = initItemsController(db);
  app.get('/items', ItemsController.index);
  app.get('/items/:itemId', ItemsController.getItem);
}
