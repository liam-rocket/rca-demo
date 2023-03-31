/* eslint-disable import/extensions */

const express = require('express');
require('./environment');

const initializeSequelize = require('./src/db/models/index.js');

const PORT = 8080;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/', (request) => {
  console.log(request.body);
});

console.log(`🚀 App listening on the port ${PORT}`);

app.listen(PORT);

const initializeApp = async () => {
  await initializeSequelize();
  app.listen(PORT);
};

initializeApp();

// todo: 4 APIs
// create customer
// create product
// get product
// create checkout session
// get subscription status

// webhooks
