import axios from "axios";
import { response } from "express";

// // Make a request to our server
// const test = axios.get("http://localhost:3004");
// console.log("test: ", test);

const aPromise = axios
  .get("http://dog.ceo/api/breeds/image/random") // will return "I am Liam"
  .then((response) => {
    console.log(response.data);
  });

const alsoAPromise = new Promise((resolve, reject) => {
  axios
    .get("http://localhost:3004") // will return "I am Liam"
    .then((response) => {
      console.log(response);
    })
    .then((secondResponse) => {
      resolve();
      response.render("ejs", { secondResponse });
    });

  resolve({ secondResponse });
}).then((response) => {
  console.log(response);
});

// Promise { <pending> }

// // Make a request to an 3rd party server / app
// axios.get("http://dog.ceo/api/breeds/image/random").then((response) => {
//   console.log(response.data.message);
// });

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
