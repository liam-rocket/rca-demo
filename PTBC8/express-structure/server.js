/* eslint-disable import/extensions */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

import loggerMiddleware from './middlewares/logger.middleware.js';
import FruitRouter from './routers/fruits.route.js';
import UserRouter from './routers/user.route.js';

const envFilePath = '.env';
dotenv.config({ path: path.normalize(envFilePath) });

const app = express();
app.use(loggerMiddleware);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', new UserRouter().router);
app.use('/', new FruitRouter().router);

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`🚀 App listening on the port ${PORT}`);
