/* eslint-disable import/extensions */
import express from 'express';
import axios from 'axios';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';

import logger from './middlewares/logger.middleware.js';
import FruitRouter from './routers/fruits.route.js';
import DefaultRouter from './routers/default.route.js';

const envFilePath = '.env';
dotenv.config({ path: path.normalize(envFilePath) });

const app = express();
app.use(logger);
app.use(cors());

// * modulizing the routers instead of defining all of them in the same file
app.use('/', DefaultRouter);
app.use('/fruits', FruitRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`🚀 App listening on the port ${PORT}`);
