import axios from "axios";

// computer call this function and move on, because it is asynchronous
axios.get("http://dog.ceo/api/breeds/image/random").then((response) => {
  console.log("expect this to come first");
  console.log(response.data.message);
});

console.log("expect this to come second");

// todo: await
// // computer you call this function and move on, because it is asynchronous
// const response = await axios
//   .get("http://dog.ceo/api/breeds/image/random")
//   .then((response) => {
//     console.log("expect this to come first");
//     console.log(response.data.message);
//   });

// const dogImage = response.data.message;

// console.log(dogImage);
// console.log("expect this to come second");
