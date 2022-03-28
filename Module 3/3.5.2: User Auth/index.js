import express from "express";
import pool from "./initPool.js";
import { getHashedString, getHashedCookie } from "./hash.js";

const port = 3004;

const app = express();
app.use(express.urlencoded({ extended: false }));
console.log(`🚀 App listening on the port ${port}`);

app.post("/signup", (request, response) => {
  // use a function to generate the hashedPassword
  const hashedPassword = getHash(request.body.password);

  // store the hashed password in our DB
  const values = [request.body.email, hashedPassword];
  pool.query(
    "INSERT INTO users (email, password) VALUES ($1, $2)",
    values,
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
      response.status(200).send("created user!");
    }
  );
});

app.post("/login", (request, response) => {
  console.log("request came in");

  const values = [request.body.email];

  console.log(request.body.email, request.body.password);

  // find the user with that email address
  pool.query("SELECT * from users WHERE email=$1", values, (error, result) => {
    if (error) {
      console.log("Error executing query", error.stack);
      response.status(503).send(result.rows);
      return;
    }

    if (result.rows.length === 0) {
      // we didnt find a user with that email.
      // the error for password and user are the same. don't tell the user which error they got for security reasons, otherwise people can guess if a person is a user of a given service.
      response.status(403).send("sorry!");
      return;
    }

    const user = result.rows[0];

    // get the hashed password in the database
    const hashedPasswordInDatabase = user.password;
    // hash the password the user inputed from the login
    const hashedPasswordFromLogin = getHashedString(request.body.password);

    // since the same value wil always get the same hash, if the two hashes match, it means the password is correct
    if (hashedPasswordInDatabase === hashedPasswordFromLogin) {
      response.cookie("loggedIn", true);

      // generate hashed cookie
      const salt = "hello";
      const hashedCookieString = getHashedCookie(user.id, salt);
      response.cookie("loggedInHash", hashedCookieString);

      response.send("logged in!");
    } else {
      // password didn't match
      // the error for password and user are the same. don't tell the user which error they got for security reasons, otherwise people can guess if a person is a user of a given service.
      response.status(403).send("sorry!");
    }
  });
});

app.get("/user-dashboard", (request, response) => {
  if (request.cookies.loggedIn === undefined) {
    response.status(403).send("sorry, please log in!");
    return;
  }
  // ...
});

app.listen(port);
