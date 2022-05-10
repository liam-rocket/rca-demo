/* eslint-disable import/extensions */
import { Router } from 'express';

import db from '../db/models/index.model.js';
import ItemController from '../controllers/item.controller.js';

const router = Router();

const itemController = new ItemController(db);

router.get('/items/create', itemController.getItemForm);
router.post('/items/create', itemController.createItem);

export default router;
