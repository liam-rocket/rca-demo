import axios from "axios";

// Make a request
const getRequestPromise = axios.get("http://dog.ceo/api/breeds/image/random");

// Define the callback
const whenRequestHasResponse = (response) => {
  // Handle request success
  console.log(response);
};

// Tell the program to call the callback on request success.
getRequestPromise.then(whenRequestHasResponse);
