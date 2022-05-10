/* eslint-disable class-methods-use-this */
class ItemController {
  constructor(db) {
    this.db = db;
  }

  getItemForm = async (request, response) => {
    try {
      response.render('create-item');
    } catch (err) {
      console.error(err);
    }
  };

  createItem = async (request, response) => {
    try {
      const { item } = request.body;
      const resp = await this.db.Item.create({
        name: item,
      });
      const newItem = resp.toJSON();

      response.render('items', { newItem });
    } catch (err) {
      console.error(err);
    }
  };
}

export default ItemController;
