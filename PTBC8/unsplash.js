/* eslint-disable comma-dangle */
import axios from 'axios';
import path from 'path';
import dotenv from 'dotenv';

const envFilePath = '.env';
dotenv.config({ path: path.normalize(envFilePath) });

const accessKey = process.env.UNSPLASH_ACCESS_KEY;

const apiUrl = 'https://api.unsplash.com';

const getARandomPhoto = async () => {
  const response = await axios.get(`${apiUrl}/photos/random`, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
  });
  return response.data.urls;
};

await getARandomPhoto();
