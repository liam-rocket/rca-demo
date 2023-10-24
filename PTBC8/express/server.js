/* eslint-disable import/extensions */
import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';

import loggerMiddleware from './middlewares/logger.middleware.js';
import FruitRouter from './routers/fruits.route.js';
import DefaultRouter from './routers/default.route.js';

const envFilePath = '.env';
dotenv.config({ path: path.normalize(envFilePath) });

const app = express();
app.use(loggerMiddleware);
app.use(cors());

// GET - localhost:3000/test
app.get('/test', (request, response) => {
  response.status(200).json({ success: true });
});

// * modulizing the routers instead of defining all of them in the same file
app.use('/', DefaultRouter);
app.use('/fruits', FruitRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`🚀 App listening on the port ${PORT}`);

/**
 * List the users
 * GET - /users?name=zac&location=sg&
 *
 * Get one specific users
 * GET - /user/:userId
 *
 * Get contact details of a user
 * GET - /user/:userId/contact
 *
 * Create one user
 * POST - /user
 *
 * Update a specific user
 * PUT - /user/:userId
 *
 * Delete a specific user
 * DELETE - /user/:userId
 */
