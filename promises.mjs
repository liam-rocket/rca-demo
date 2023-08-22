import axios from 'axios';

const aPromise = axios
  .get('http://dog.ceo/api/breeds/image/random')
  .then((response) => response.data.message)
  .catch((err) => {
    console.log(err);
  });

const aPromiseThatWillFail = axios
  .get('http://cearadsf.ceo/api/breeds/image/random')
  .then((response) => response.data.message)
  .catch((err) => {
    console.log(err);
  });

Promise.all([aPromise, aPromiseThatWillFail, aPromise]).then((results) => {
  console.log(results);
});

// Promise.all([
//   axios.get('http://dog.ceo/api/breeds/image/random'), // <- request1 - 900ms
//   axios.get('http://ceot.ceo/api/breeds/image/random'), // <- request2 - 15000ms
//   axios.get('http://dog.ceo/api/breeds/image/random'), // <- request3 - 200ms
//   // results is an array of results whose elements correspond
//   // to the elements in the Promise.all parameter array
// ])
//   .then((results) => {
//     const [response1, response2, response3] = results;
//     console.log('response1: ', response1.data.message);
//     console.log('response2: ', response2.data.message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
