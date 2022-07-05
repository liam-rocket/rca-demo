/* eslint-disable import/extensions */
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

const envFilePath = '.env';
dotenv.config({ path: path.normalize(envFilePath) });

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (request, response) => {
  response.render('home');
});

app.get('/ajax', (request, response) => {
  response.send(new Date());
});

app.get('/form', (request, response) => {
  response.send(new Date());
});

app.listen(3005);
