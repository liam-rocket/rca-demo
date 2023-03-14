/* eslint-disable import/extensions */
import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/change-password', (request) => {
  console.log(request.body);
});

console.log('app running');

app.listen(8080);
