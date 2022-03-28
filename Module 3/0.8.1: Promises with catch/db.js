import axios from "axios";
import { response } from "express";
import pg from "pg";
const { Client } = pg;

const pgConnectionConfigs = {
  user: "yickkiuliamleung",
  host: "localhost",
  database: "museum",
  port: 5432,
};
const client = new Client(pgConnectionConfigs);
client.connect();

// Promises.all

const paintingQuery = `SELECT * FROM paintings`;
const getPaintings = new Promise((resolve, reject) => {
  client
    .query(paintingQuery)
    .then((result) => {
      // todo: if we console log here, what will we see ?
      resolve(result.rows); // results.rows is an array
    })
    .catch((err) => {
      reject(err.stack); // wont break
    });
});

const collectionQuery = `SELECT * FROM collections`;
const getCollections = new Promise((resolve, reject) => {
  client
    .query(collectionQuery)
    .then((result) => {
      setTimeout(() => {
        resolve(result.rows); // results.rows is an array
      }, 5000);
    })
    .catch((err) => {
      reject(err.stack); // wont break
    });
});

// takes in an array of promises, gets resolved when all the promises get resolved or any one of them gets rejected.
// One interesting thing about Promise.all is that the order of the promises is maintained.
// The first promise in the array will get resolved to the first element of the output array, the second promise will be a second element in the output array and so on.
const allPromises = Promise.all([getPaintings, getCollections]).then(
  (results) => {
    console.log("results: ", results); // todo: this will be an array of arrays, WHY ?
    console.log("paintings:", results[0]);
    console.log("collections:", results[1]);
    response.render("art", { paintings: results[0], collections: results[1] });
  }
);
console.log("allPromises: ", allPromises); // todo: what will we get here ?
