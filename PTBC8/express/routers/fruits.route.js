import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('GET route on fruits.');
});
router.post('/', (req, res) => {
  res.send('POST route on fruits.');
});

export default router;
