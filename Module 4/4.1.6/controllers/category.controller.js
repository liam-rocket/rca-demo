/* eslint-disable import/extensions */

import sequelizePackage from 'sequelize';
import HttpException from '../exceptions/HttpException.js';

const { ValidationError, DatabaseError } = sequelizePackage;
class CategoryController {
  constructor(db) {
    this.db = db;
  }

  violateDbConstraint = async (request, response, next) => {
    try {
      const { categoryName, itemName } = request.body;

      const category = await this.db.Category.findOne({
        where: {
          name: categoryName,
        },
      });
      const associatedItem = await this.db.Item.create({
        name: itemName,
        categoryId: category.id,
      });
      response.json(associatedItem);
    } catch (error) {
      // we should refactor the below logic into a reusable function (ie. the error middleware)
      if (error instanceof DatabaseError) {
        console.error('This is a database error!');
        console.error(error);
      }
      if (error instanceof ValidationError) {
        console.error('This is a validation error!');
        console.error(error);
        console.error('The following is the first error message:');
        console.error(error.errors[0].message);
      }
      console.error(error);
      next(error);
    }
  };

  createCategory = async (request, response, next) => {
    try {
      const { categoryName } = request.body;
      const newCategory = await this.db.Category.create({
        name: categoryName,
      });

      const [numberOfUpdatedCategory, updatedCategories] =
        await this.db.Category.update(
          {
            name: 'liam',
          },
          {
            where: {
              id: 1,
            },
            returning: true,
          }
        );

      // offset = item to start with
      // limit = amount of items returned

      // 5, 22, 2, 3, 1

      // pagination
      const categories = await this.db.Category.findAndCountAll({
        where: {
          name: 'liam',
        },
        // limit: 2,
        offset: 2,
      });

      response.send(categories);
      // response.send({ numberOfUpdatedCategory, updatedCategories });
    } catch (error) {
      next(error);
    }
  };

  // eslint-disable-next-line class-methods-use-this
  justGonnaThrowSomeError = async (request, response, next) => {
    try {
      throw new HttpException(500, 30006, 'this is an error LOOOOL');

      response.send(
        'should not be sending this response since an error will be thrown before this'
      );
    } catch (error) {
      next(error);
    }
  };
}

export default CategoryController;
