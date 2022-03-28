import pg from "pg";
const { Client } = pg;

// set the way we will connect to the server
const pgConnectionConfigs = {
  user: "<MY_UNIX_USERNAME>",
  host: "localhost",
  database: "<MY_UNIX_USERNAME>",
  port: 5432, // Postgres server always runs on this port
};

// create the var we'll use
const client = new Client(pgConnectionConfigs);

// make the connection to the server
client.connect();

// write the SQL query
const recipeQuery = "SELECT * from recipes WHERE id=1";

// run the SQL query
client.query(recipeQuery, (recipeQueryError, recipeQueryResult) => {
  // this error is anything that goes wrong with the query
  if (recipeQueryError) {
    console.error("recipe query error", recipeQueryError);
    client.end();
    return;
  }

  // rows key has the data
  console.log(recipeQueryResult.rows);

  // return early if no results
  if (recipeQueryResult.rows.length <= 0) {
    console.log("no results!");
    client.end();
    return;
  }

  // extract the recipe that we queried for
  const recipe = recipeQueryResult.rows[0];

  // MAGIC: use the result of the 1st query in the 2nd
  const categoryQuery = `SELECT * FROM categories WHERE id=${recipe.category_id}`;

  client.query(categoryQuery, (categoryQueryError, categoryQueryResult) => {
    // this error is anything that goes wrong with the query
    if (categoryQueryError) {
      console.error("category query error", categoryQueryError);
      client.end();
      return;
    }

    // rows key has the data
    console.log(categoryQueryResult.rows);

    // close the connection
    client.end();
  });
});
