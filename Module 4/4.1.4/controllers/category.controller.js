/* eslint-disable class-methods-use-this */
class ItemController {
  constructor(db) {
    this.db = db;
  }

  createItemInCategory = async (request, response) => {
    try {
      const { categoryName, itemName } = request.body;
      const category = await this.db.Category.findOne({
        where: {
          name: categoryName,
        },
      });

      // create an item record AND a join table record
      const item = await category.createItem({
        name: itemName,
      });

      response.json(item);
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  };

  createAssociation = async (request, response) => {
    try {
      const { categoryName, itemName } = request.body;

      const category = await this.db.Category.findOne({
        where: {
          name: categoryName,
        },
      });

      const item = await this.db.Item.findOne({
        where: {
          name: itemName,
        },
      });

      // create the row in the join table
      const result = await category.addItem(item);
      response.json(result);
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  };

  getCategorysItems = async (request, response) => {
    try {
      const { categoryName } = request.params;

      const category = await this.db.Category.findOne({
        where: {
          name: categoryName,
        },
      });

      const categoryItems = await category.getItems();
      response.json(categoryItems);
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  };
}

export default ItemController;
