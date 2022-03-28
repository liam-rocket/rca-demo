import express from "express";

const app = express();

const createCookie = (request, response) => {
  response.cookie("cookie", "monster");
  response.cookie("singapore", "sling");
  response.cookie("rocket", "academy");
  response.cookie("user", "liam@rocketacademy.co");
  response.send("check your cookies!");
};

const deleteCookie = (request, response) => {
  response.clearCookie("user");
  response.send("deleted cookies!");
};

const retrieveCookie = (request, response) => {
  // console.log(request.headers);
  console.log(request.headers.cookie);
};

app.get("/", createCookie);
app.get("/delete", deleteCookie);
app.get("/retrieve", retrieveCookie);

app.listen(3004);
