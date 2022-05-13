/* eslint-disable comma-dangle */
/* eslint-disable import/extensions */
import { Router } from 'express';

import db from '../db/models/index.model.js';
import CategoryController from '../controllers/category.controller.js';

const router = Router();

const prefix = '/categories'; // todo: <-- new thing!

const categoryController = new CategoryController(db);

router.get(`${prefix}/:categoryName`, categoryController.getCategorysItems);
router.post(`${prefix}/create-item`, categoryController.createItemInCategory);
router.post(
  `${prefix}/create-association`,
  categoryController.createAssociation
);

export default router; // todo: <-- initialise routes ;)
