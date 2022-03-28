import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

const countCookie = (request, response) => {
  console.log(request.cookies);
  // console.log(request.cookies.visits);

  let visits = 0;

  // visit=0 rocket=academy

  // check if it's not the first time a request has been made
  if (request.cookies.visits) {
    visits = Number(request.cookies.visits); // get the value from the request
  }

  // set a new value of the cookie
  visits += 1;
  response.cookie("visits", visits); // set a new value to send back
  response.send(`Current cookie key and value: visits: ${visits}`);
};

app.get("/home", (request, response) => {
  response.cookie("visits", 1);
  response.send(`Current cookie key and value: visits`);
});

app.get("/", countCookie);

app.listen(3004);
