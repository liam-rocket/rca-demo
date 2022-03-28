import moment from "moment";
import express from "express";
import pool from "./initPool.js";

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

const handleIncomingRequest = (request, response) => {
  response.render("date", {});
};
app.get("/", handleIncomingRequest);

app.post("/sightings", (request, response) => {
  const sightingValues = [request.body.description, request.body.date];

  const sightingInsertQuery =
    "INSERT INTO sightings (description, date) VALUES ($1, $2) RETURNING *";

  pool.query(sightingInsertQuery, sightingValues, (error, result) => {
    if (error) {
      console.log(error);
      response.status(501).send("error!");
      return;
    }

    console.log(result.rows);
    response.redirect("/sightings");
  });
});

app.get("/sightings", (request, response) => {
  const query = "SELECT * from sightings";

  pool.query(query).then((result) => {
    // print out all the dates in the database
    const sightings = result.rows.map((sighting) => {
      // change this Date object into a string value
      // return sighting.created_at.toString();
      // HH:mm:ss
      return moment(sighting.created_at)
        .add(5, "months")
        .format("YYYY MM DD hh:mm:ss A");
    });

    response.render("sightings", { sightings });
  });
});

app.listen(3004);
