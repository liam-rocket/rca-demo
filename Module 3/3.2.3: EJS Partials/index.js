import express from "express";

const users = {
  users: [
    {
      name: "liam",
      email: "liam@rocketacademy.co",
      role: "section leader",
    },
    {
      name: "joe",
      email: "joe@rocketacademy.co",
      role: "section leader",
    },
  ],
};

const app = express();

app.set("view engine", "ejs");

const handleIncomingRequest = (request, response) => {
  response.render("users", users);
};

app.get("/", handleIncomingRequest);

app.listen(3004);
