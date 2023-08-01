import axios from 'axios';

const getDogImage = async () => {
  try {
    const response = await axios.get('http://dog.ceo/api/breeds/image/random');
    return response.data.message;
  } catch (err) {
    console.log(err);
  }
};

console.log('before calling');

const dogImage = await getDogImage();

console.log('after calling');
console.log(dogImage);
