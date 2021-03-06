import axios from 'axios';

// computer call this function and move on, because it is asynchronous
// axios.get('http://dog.ceo/api/breeds/image/random').then((response) => {
//   console.log('expect this to come first');
//   console.log(response.data.message);
// });

// console.log('expect this to come second');

// todo: using await

const getDogImage = async () => {
  try {
    const response = await axios.get('http://localhost:3004/items/banana');
  } catch (err) {
    console.log(err);
  }
};

await getDogImage();

// console.log('expect this to come second');

// * POST

// axios
//   .post('http://dog.ceo/api/breeds/image/random', { name: 'liam' })
//   .then((response) => {
//     console.log('expect this to come first');
//     console.log(response.data.message);
//   });

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
