/* eslint-disable import/extensions */
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

import ItemRouter from './routes/item.routes.js';

const envFilePath = '.env';
dotenv.config({ path: path.normalize(envFilePath) });

const PORT = 3004;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

const routers = [ItemRouter];
routers.forEach((router) => app.use('/', router));

app.listen(PORT);
console.log(`🚀 App listening on the port ${PORT}`);
