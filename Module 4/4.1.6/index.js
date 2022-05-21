/* eslint-disable import/extensions */
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

import errorMiddleware from './middlewares/error.middleware.js';

import CategoryRouter from './routes/category.routes.js';

const envFilePath = '.env';
dotenv.config({ path: path.normalize(envFilePath) });

const PORT = 3004;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(errorMiddleware);

app.set('view engine', 'ejs');

const routers = [CategoryRouter];
routers.forEach((router) => app.use('/', router));

app.listen(PORT);
console.log(`🚀 App listening on the port ${PORT}`);
