/* eslint-disable comma-dangle */
/* eslint-disable import/extensions */
import { Router } from 'express';

import randomMiddleware from '../middlewares/random.middleware.js';
import db from '../db/models/index.model.js';
import CategoryController from '../controllers/category.controller.js';

const router = Router();

const prefix = '/categories'; // todo: <-- new thing!

const categoryController = new CategoryController(db);

router.get(
  `${prefix}/:categoryName`,
  randomMiddleware,
  categoryController.getCategoryItems
);
router.post(
  `${prefix}/create-item`,
  randomMiddleware,
  categoryController.createItemInCategory
);
router.post(
  `${prefix}/create-association`,
  randomMiddleware,
  categoryController.createAssociation
);

export default router; // todo: <-- initialise routes ;)
