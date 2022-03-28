// // // import kilometersToMiles from "./imperialConversion.js";

// // // console.log(kilometersToMiles(3));

// // // button.addEventListener("click", (event) => {
// // //   console.log(event);
// // // });

// // // const action = (event) => {
// // //   console.log(event);
// // // };

// // // button.addEventListener("click", action);

// import fs from "fs";

// const handleFileRead = (error, content) => {
//   console.log("running inside of handleFileRead");

//   // Handle errors if any
//   if (error) {
//     console.log("read error", error);
//     return;
//   }

//   console.log("content", content);
// };

// console.log("about to call readFile");

// // // 2nd param 'utf8' specifies the file encoding.
// // // Read more about UTF8 here: https://en.wikipedia.org/wiki/UTF-8
// fs.readFile("mystuff.txt", "utf8", handleFileRead);

// // readFile("mystuff.txt", "utf8", (error, content) => {
// //   console.log("running inside of handleFileRead");

// //   // Handle errors if any
// //   if (error) {
// //     console.log("read error", error);
// //     return;
// //   }

// //   console.log("content", content);
// // });

// // const orderCar = () => {
// //   console.log("Liam placed the order");
// //   setTimeout(() => {
// //     console.log("Liam gets the car");
// //   }, 5000);
// // };

// // const payForTheCar = () => {
// //   console.log("Liam has paid $50");
// // };

// // orderCar();
// // payForTheCar();
// // payForTheCar();
// // payForTheCar();
// // payForTheCar();
// // payForTheCar();

const text = "// Add 2 numbers and return the result\r";

const newText = text.replace(/\/\/|\r/g, "");

console.log(newText);
