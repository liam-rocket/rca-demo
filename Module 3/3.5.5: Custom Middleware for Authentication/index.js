import express from "express";
import cookieParser from "cookie-parser";
import pool from "./initPool.js";
import authMiddleware from "./middlewares/auth.middleware.js";
import helloMiddleware from "./middlewares/hello.middleware.js";
import { getHashedString, getHashWithSalt } from "./hash.js";

const port = 3004;

const app = express();
// todo: 1. will need cookie parser
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
console.log(`🚀 App listening on the port ${port}`);

app.post("/signup", authMiddleware, (request, response) => {
  // use a function to generate the hashedPassword
  const hashedPassword = getHashedString(request.body.password);

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

// todo: 2. refactored below to use .then()
app.post("/login", (request, response) => {
  const values = [request.body.email];
  pool
    .query("SELECT * from users WHERE email=$1", values)
    .then((result) => {
      if (result.rows.length === 0) {
        // we didnt find a user with that email.
        // the error for password and user are the same. don't tell the user which error they got for security reasons, otherwise people can guess if a person is a user of a given service.
        response.status(403).send("No user with this email was found.");
        return;
      }
      const user = result.rows[0];

      // get the hashed password in the database
      const hashedPasswordInDatabase = user.password;
      // hash the password the user inputed from the login
      const hashedPasswordFromLogin = getHashedString(request.body.password);

      // since the same value wil always get the same hash, if the two hashes match, it means the password is correct
      if (hashedPasswordInDatabase === hashedPasswordFromLogin) {
        // generate hashed cookie
        // todo: 3. modified getHashWithSalt to set default salt
        const hashedCookieString = getHashWithSalt(user.id);

        response.cookie("loggedIn", true);
        response.cookie("loggedInHash", hashedCookieString);

        // todo: 4. set additional cookie -> userId
        response.cookie("userId", user.id);

        response.send(`logged in ${user.email}!`);
      } else {
        response
          .status(403)
          .send("Email and password combination is incorrect!");
      }
    })
    .catch((error) => {
      response.status(403).send("Sorry!");
    });
});

app.get("/dashboard", authMiddleware, (request, response) => {
  response.send("Liam's passport number: 1234566778");
});

app.listen(port);

// https://stackoverflow.com/questions/27301557/if-you-can-decode-jwt-how-are-they-secure
