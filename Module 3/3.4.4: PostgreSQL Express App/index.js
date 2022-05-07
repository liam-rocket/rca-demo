import express from 'express';
import pg from 'pg';
import axios from 'axios';

// Initialise DB connection
const { Pool } = pg;
const pgConnectionConfigs = {
  user: 'yickkiuliamleung',
  host: 'localhost',
  database: 'postgres',
  port: 5432, // Postgres server always runs on this port by default
};
const pool = new Pool(pgConnectionConfigs);

const app = express();

app.get('/', (request, response) => {
  console.log('request came in');

  // pool.query("SELECT * from cats", (error, result) => {
  //   if (error) {
  //     console.log("Error executing query", error.stack);
  //     response.status(503).send(result.rows);
  //     return;
  //   }
  //   response.send(result.rows);
  // });

  setTimeout(() => {
    response.send('I am fulfiling my promise');
  }, 1000);

  // axios.get("http://dog.ceo/api/breeds/image/random").then((response) => {
  //   // Handle request success
  //   // console.log(response);
  //   const image = response.data.message;
  //   res.send(image);
  // });
});

app.get('/liam', (request, response) => {
  console.log('request came in');
});

app.listen(3004);
