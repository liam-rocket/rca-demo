/* eslint-disable import/extensions */
import { Router } from 'express';

import db from '../db/models/index.model.js';
import ItemController from '../controllers/item.controller.js';

const router = Router();

const itemController = new ItemController(db);

router.get('/', itemController.getHtml);
router.get('/getItems', itemController.getItems);

export default router;
