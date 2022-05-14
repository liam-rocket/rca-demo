/* eslint-disable comma-dangle */
/* eslint-disable import/extensions */
import { Router } from 'express';

import randomMiddleware from '../middlewares/random.middleware.js';
import db from '../db/models/index.model.js';
import ItemController from '../controllers/item.controller.js';

const router = Router();

const prefix = '/items'; // todo: <-- new thing!

const itemController = new ItemController(db);

router.get(
  `${prefix}/:itemName`,
  randomMiddleware,
  itemController.getItemsCategories
);

export default router;
