/* eslint-disable import/extensions */
import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import AuthRouter from './routes/auth.routes.js';

import errorMiddleware from './middlewares/error.middleware.js';

// todo: remember to add this into your app.use(cors())
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

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
app.use(cors(corsOptions));

const routers = [AuthRouter];
routers.forEach((router) => app.use('/', router));

app.use(errorMiddleware);
app.set('trust proxy', true);

app.listen(PORT);
console.log(`🚀 App listening on the port ${PORT}`);
