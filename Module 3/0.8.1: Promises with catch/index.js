// * numbered the steps

console.log("1. creating promise");
const myFirstPromise = new Promise((resolve, reject) => {
  console.log("2. setting timeout");
  // todo: what happens if we move resolve here ?
  resolve("Hello Regina!"); // Yay! Everything went well!
  setTimeout(() => {
    console.log("3. timeout done, calling resolve");
    console.log("4. done calling resolve");
    // reject("this is an error"); // when to use reject: https://www.geeksforgeeks.org/javascript-promise-reject-method/
  }, 1000);
  console.log("5. done setting timeout");
});

console.log("6. about to set .then callback");
myFirstPromise
  .then((successMessage) => {
    console.log(`7. Yay! ${successMessage}`); // we resolve something
    console.log("8. done calling .then");
  })
  .catch((error) => {
    console.log("error", error); //  we reject something
  });
console.log("9. done setting then callback");
