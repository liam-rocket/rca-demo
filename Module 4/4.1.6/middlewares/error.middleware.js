/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */

import sequelizePackage from 'sequelize';
import HttpException from '../exceptions/HttpException.js';

const { ValidationError, DatabaseError } = sequelizePackage;

function errorMiddleware(error, request, response, next) {
  if (error instanceof DatabaseError) {
    console.error('This is a database error!');
    console.error(error);
    response.status(500).json({
      message: error.message,
    });
  }

  if (error instanceof ValidationError) {
    console.error('This is a validation error!');
    console.error(error);
    response.status(500).json({
      message: error.errors[0].message,
    });
  }

  if (error instanceof HttpException) {
    const status = error.status || 500;
    const code = error.code || 0;
    const message = error.message || 'Unknown error';
    const params = error.params || null;

    console.error('[ERROR] ', status, message);
    response.status(status).json({ code, message, params });
  }

  response.status(500).json({
    message: 'Something went wrong',
  });
}

export default errorMiddleware;
