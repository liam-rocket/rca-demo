/* eslint-disable comma-dangle */
/* eslint-disable import/extensions */
import { Router } from 'express';

import randomMiddleware from '../middlewares/random.middleware.js';
import db from '../db/models/index.model.js';
import MessageController from '../controllers/message.controller.js';

const router = Router();

const prefix = '/message';

const messageController = new MessageController(db);

router.post(
  `${prefix}/send-message`,
  randomMiddleware,
  messageController.sendMessage
);
router.post(
  `${prefix}/receive-message`,
  randomMiddleware,
  messageController.receiveMessage
);
router.post(`${prefix}/inbox`, randomMiddleware, messageController.inbox);

export default router;
