/* eslint-disable import/extensions */
const { Router } = require('express');
const NamesController = require('../controllers/names.controller');
const db = require('../db/models/index');

class namesRouter {
  path = '/names';

  router = Router();

  controller = new NamesController(db);

  constructor() {
    this.initializeRoutes(); // whatever we out inside the contructor will trigger when initialising the class
  }

  initializeRoutes = () => {
    this.router.get(`${this.path}/`, this.controller.list);
    this.router.post(`${this.path}/`, this.controller.add);
    this.router.delete(`${this.path}/:id`, this.controller.delete);
  };
}

module.exports = namesRouter;
