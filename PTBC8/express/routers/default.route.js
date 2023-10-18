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

export default defaultRouter;
