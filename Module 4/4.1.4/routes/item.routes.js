/* eslint-disable import/extensions */
import { Router } from 'express';

import db from '../db/models/index.model.js';
import ItemController from '../controllers/item.controller.js';

const router = Router();

const prefix = '/items'; // todo: <-- new thing!

const itemController = new ItemController(db);

router.get(`${prefix}/:itemName`, itemController.getItemsCategories);

export default router;
