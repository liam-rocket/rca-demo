/* eslint-disable comma-dangle */
/* eslint-disable import/extensions */
import { Router } from 'express';

import randomMiddleware from '../middlewares/random.middleware.js';
import db from '../db/models/index.model.js';
import CartController from '../controllers/cart.controller.js';

const router = Router();

const prefix = '/carts';

const cartController = new CartController(db);

router.get(`${prefix}`, randomMiddleware, cartController.getModels);

export default router;
