import axios from 'axios';

/**
 * * A Promise is an object representing the eventual completion or failure of an asynchronous operation.
 */

const getDogImage = async () => {
  try {
    const response = await axios.get('http://dog.ceo/api/breeds/image/random');
    return response.data.message;
  } catch (err) {
    console.log(err);
  }
};

// const dogImage = await getDogImage();

// console.log(dogImage);

// console.log(axios.get('http://dog.ceo/api/breeds/image/random'));

// axios
//   .get('http://dog.ceo/api/breeds/image/random')
//   .then((response) => {
//     console.log(response.data.message);
//     return response.data.message;
//   })
//   .catch((error) => {
//     console.log(error);
//   });

axios
  .get('http://dog.ceo/api/breeds/image/random')
  .then((response) => {
    return response.data.message;
  })
  .then((url) => {
    console.log('URL: ', url);
  })
  .catch((error) => {
    console.log(error);
  });
