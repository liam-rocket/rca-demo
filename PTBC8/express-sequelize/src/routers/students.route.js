/* eslint-disable import/extensions */
const { Router } = require('express');
const StudentController = require('../controllers/students.controller');
const db = require('../db/models/index');

class StudentRouter {
  path = '/students';

  router = Router();

  controller = new StudentController(db);

  constructor() {
    this.initializeRoutes(); // whatever we out inside the contructor will trigger when initialising the class
  }

  initializeRoutes = () => {
    this.router.get(`${this.path}/:id`, this.controller.get);
    this.router.get(`${this.path}/`, this.controller.list);
    this.router.post(`${this.path}/`, this.controller.add);
    this.router.put(`${this.path}/:id`, this.controller.edit);
    this.router.delete(`${this.path}/:id`, this.controller.delete);
  };
}

module.exports = StudentRouter;
