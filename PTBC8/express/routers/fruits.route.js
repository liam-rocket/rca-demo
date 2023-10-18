import express from 'express';

const fruitRouter = express.Router();

fruitRouter.get('/', (req, res) => {
  res.send('GET route on fruits.');
});
fruitRouter.post('/', (req, res) => {
  res.send('POST route on fruits.');
});

export default fruitRouter;
