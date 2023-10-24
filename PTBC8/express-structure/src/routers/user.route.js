/* eslint-disable import/extensions */
import { Router } from 'express';
import UsersController from '../controllers/users.controller.js';

class UserRouter {
  path = '/users'; // we dont use contructors because these values that are shared among all instances of a class

  router = Router();

  controller = new UsersController();

  constructor() {
    this.initializeRoutes(); // whatever we out inside the contructor will trigger when initialising the class
  }

  initializeRoutes = () => {
    this.router.get(`${this.path}/:userId`, this.controller.getUser);
    this.router.get(`${this.path}/`, this.controller.getUsers);
    this.router.post(`${this.path}/`, this.controller.createUser);
    this.router.put(`${this.path}/:name`, this.controller.updateUser);
    this.router.delete(`${this.path}/:id`, this.controller.deleteUser);
  };
}

export default UserRouter;
