/* eslint-disable no-unused-vars */
import sequelizePackage from 'sequelize';

const { ValidationError, DatabaseError } = sequelizePackage;

function errorMiddleware(request, response, error) {
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

  response.status(500).json({
    message: 'Something went wrong',
  });
}

export default errorMiddleware;
