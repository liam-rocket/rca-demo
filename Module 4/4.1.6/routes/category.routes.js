/* eslint-disable comma-dangle */
/* eslint-disable import/extensions */
import { Router } from 'express';

import randomMiddleware from '../middlewares/random.middleware.js';
import db from '../db/models/index.model.js';
import CategoryController from '../controllers/category.controller.js';

const router = Router();

const prefix = '/category';

const categoryController = new CategoryController(db);

router.get(
  `${prefix}`,
  randomMiddleware,
  categoryController.violateDbConstraint
);

export default router;
