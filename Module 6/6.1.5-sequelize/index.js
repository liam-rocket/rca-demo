/* eslint-disable import/extensions */
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import ItemRouter from './routes/item.routes.js';

const PORT = 3005;
const envFilePath = '.env';
dotenv.config({ path: path.normalize(envFilePath) });

const app = express();
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('dist'));

const routers = [ItemRouter];
routers.forEach((router) => app.use('/', router));

app.listen(PORT);
console.log(`🚀 App listening on the port ${PORT}`);
