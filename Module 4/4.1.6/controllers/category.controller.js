import sequelizePackage from 'sequelize';

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
      // if (error instanceof DatabaseError) {
      //   console.error('This is a database error!');
      //   console.error(error);
      // }
      // if (error instanceof ValidationError) {
      //   console.error('This is a validation error!');
      //   console.error(error);
      //   console.error('The following is the first error message:');
      //   console.error(error.errors[0].message);
      // }
      // console.error(error);
      // --
      response.status(500).json({
        message: error.message,
      });
      // --
      // next(error);
    }
  };

  createCategory = async (request, response, next) => {
    try {
      const { categoryName } = request.body;
      const newCategory = await this.db.Category.create({
        name: categoryName,
      });
      response.send(newCategory);
    } catch (error) {
      next(error);
    }
  };
}

export default CategoryController;
