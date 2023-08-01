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
    const response = await axios.get('http://dog.ceo/api/breeds/image/random');
    return response.data.message;
  } catch (err) {
    console.log(err);
  }
};

const dogImage = await getDogImage();
console.log(dogImage);

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
