import express from 'express';
import axios from 'axios';

const defaultRouter = express.Router();

defaultRouter.get('/', (req, res) => {
  res.status(200).json({ success: true, data: 'Hello World !' });
});

defaultRouter.get('/image/dog', async (req, res) => {
  const dogImageResp = await axios.get(
    'http://dog.ceo/api/breeds/image/random'
  );
  const dogImageLink = dogImageResp.data.message;
  res.status(200).json({ success: true, data: dogImageLink });
});

// http://localhost:3000/user/liam
defaultRouter.get('/users/:name', (req, res) => {
  const { name } = req.params;
  res.status(200).json({ success: true, data: `This is ${name}` });
});

// http://localhost:3000/users?name=liam&location=hongkong
defaultRouter.get('/users', (req, res) => {
  const { name, location } = req.query;
  res.status(200).json({ success: true, data: `${name} is in ${location}` });
});

export default defaultRouter;
