/* eslint-disable class-methods-use-this */
class ItemController {
  constructor(db) {
    this.db = db;
  }

  getItemsCategories = async (request, response, next) => {
    try {
      const { itemName } = request.params;

      const item = await this.db.Item.findOne({
        where: {
          name: [itemName],
        },
        include: [{ model: this.db.Category }],
      });

      // const gonnaThrowAnError = await this.db.Item.create({
      //   id: 'hahahhaha',
      // });

      if (!item) {
        throw new Error('item does not exist');
      }

      const itemCategories = await item.getCategories();
      response.json(itemCategories);
    } catch (err) {
      console.error(err);
      next({
        code: 30001,
        param: 'Something went wrong...',
        message: err.message, // ie. item does not exist
      });
    }
  };
}

export default ItemController;
