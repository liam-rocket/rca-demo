/* eslint-disable import/extensions */
import { Router } from 'express';
import FruitController from '../controllers/fruits.controller.js';

class FruitRouter {
  path = '/fruits';

  router = Router();

  controller = new FruitController();

  constructor() {
    this.initializeRoutes(); // whatever we out inside the contructor will trigger when initialising the class
  }

  initializeRoutes = () => {
    this.router.get(`${this.path}/`, this.controller.list);
    this.router.post(`${this.path}/`, this.controller.add);
    this.router.put(`${this.path}/:name`, this.controller.edit);
    this.router.delete(`${this.path}/:name`, this.controller.delete);
  };
}

export default FruitRouter;

// dependency injection
