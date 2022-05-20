/* eslint-disable class-methods-use-this */
class ItemController {
  constructor(db) {
    this.db = db;
  }

  getItemForm = async (req, res) => {
    try {
      res.render('create-item');
    } catch (err) {
      console.error(err);
    }
  };

  createItem = async (req, res) => {
    try {
      const { item } = req.body;
      const resp = await this.db.Item.create({
        name: item,
      });
      const newItem = resp.toJSON();

      res.render('item', newItem);
    } catch (err) {
      console.error(err);
    }
  };
}

export default ItemController;
