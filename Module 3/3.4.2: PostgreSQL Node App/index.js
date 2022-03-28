import pg from "pg";
const { Client } = pg;

// set the way we will connect to the server
const pgConnectionConfigs = {
  user: "yickkiuliamleung",
  host: "localhost", // 31.2.56.34
  database: "postgres",
  port: 5432, // Postgres server always runs on this port
};

// create the var we'll use
const client = new Client(pgConnectionConfigs);

// make the connection to the server
client.connect();

// create the query done callback
const whenQueryDone = (error, result) => {
  // this error is anything that goes wrong with the query
  if (error) {
    console.log("error", error);
  } else {
    // rows key has the data
    console.log(result.rows);
  }

  // close the connection
  client.end();
};

// write the SQL query
const sqlQuery = "SELECT * from cats";

// run the SQL query
client.query(sqlQuery, whenQueryDone);
