/* eslint-disable import/extensions */
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

import errorMiddleware from './middlewares/error.middleware.js';

import MessageRouter from './routes/message.routes.js';

const envFilePath = '.env';
dotenv.config({ path: path.normalize(envFilePath) });

const PORT = 3004;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');

const routers = [MessageRouter];
routers.forEach((router) => app.use('/', router));

// have to put these after the routes have been initialized
app.use(errorMiddleware);
app.set('trust proxy', true);

app.listen(PORT);
console.log(`🚀 App listening on the port ${PORT}`);
