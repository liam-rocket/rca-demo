/* eslint-disable import/extensions */
import { Router } from 'express';
import FruitController from '../controllers/students.controller.js';

class StudentRouter {
  path = '/students';

  router = Router();

  controller = new FruitController();

  constructor() {
    this.initializeRoutes(); // whatever we out inside the contructor will trigger when initialising the class
  }

  initializeRoutes = () => {
    this.router.get(`${this.path}/:id`, this.controller.list);
    this.router.post(`${this.path}/`, this.controller.add);
    this.router.put(`${this.path}/:id`, this.controller.edit);
    this.router.delete(`${this.path}/:id`, this.controller.delete);
  };
}

export default StudentRouter;
