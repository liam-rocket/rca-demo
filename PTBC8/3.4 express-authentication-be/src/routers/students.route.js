/* eslint-disable comma-dangle */
/* eslint-disable import/extensions */
const { Router } = require('express');
const StudentController = require('../controllers/students.controller');
const db = require('../db/models/index');
const authMiddleware = require('../middlewares/auth.middleware');

class StudentRouter {
  path = '/students';

  router = Router();

  controller = new StudentController(db);

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes = () => {
    this.router.get(
      `${this.path}/classes`,
      authMiddleware,
      this.controller.getStudentClasses
    );
    this.router.get(`${this.path}/:id`, authMiddleware, this.controller.get);
    this.router.get(`${this.path}/`, authMiddleware, this.controller.list);
    this.router.post(`${this.path}/`, authMiddleware, this.controller.add);
    this.router.put(`${this.path}/:id`, authMiddleware, this.controller.edit);
    this.router.delete(
      `${this.path}/:id`,
      authMiddleware,
      this.controller.delete
    );
  };
}

module.exports = StudentRouter;
