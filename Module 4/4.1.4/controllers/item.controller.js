/* eslint-disable class-methods-use-this */
class ItemController {
  constructor(db) {
    this.db = db;
  }

  getItemsCategories = async (request, response) => {
    try {
      const { itemName } = request.params;

      const item = await this.db.Item.findOne({
        where: {
          name: [itemName],
        },
      });

      const itemCategories = await item.getCategories();
      response.json(itemCategories);
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  };
}

export default ItemController;
