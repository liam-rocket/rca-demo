/* eslint-disable import/extensions */
import './environment.js';
import express from 'express';
import cors from 'cors';

import loggerMiddleware from './middlewares/logger.middleware.js';
import FruitRouter from './routers/fruits.route.js';
import UserRouter from './routers/user.route.js';

const app = express();
app.use(loggerMiddleware);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routers = [new UserRouter(), new FruitRouter()];
routers.forEach((router) => app.use('/', router.router));

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`🚀 App listening on the port ${PORT}`);
