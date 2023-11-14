/* eslint-disable import/extensions */
const { Router } = require('express');
const ClassesController = require('../controllers/classes.controller');
const db = require('../db/models/index');

class ClassesRouter {
  path = '/classes';

  router = Router();

  controller = new ClassesController(db);

  constructor() {
    this.initializeRoutes(); // whatever we out inside the contructor will trigger when initialising the class
  }

  initializeRoutes = () => {
    this.router.get(`${this.path}/`, this.controller.list);
  };
}

module.exports = ClassesRouter;
