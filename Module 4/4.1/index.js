/* eslint-disable import/extensions */
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

import db from './db/models/index.model.js';
import ItemController from './controllers/item.controller.js';

const envFilePath = '.env';
dotenv.config({ path: path.normalize(envFilePath) });

const app = express();
app.set('view engine', 'ejs');

const itemController = new ItemController(db);

app.get('/items', itemController.getItemForm);
app.post('/items/create', itemController.createItem);

app.listen(3004);
