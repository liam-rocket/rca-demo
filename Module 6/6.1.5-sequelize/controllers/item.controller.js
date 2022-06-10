import { resolve } from 'path';

/* eslint-disable class-methods-use-this */
class ItemController {
  constructor(db) {
    this.db = db;
  }

  getHtml = async (req, res) => {
    try {
      res.sendFile(resolve('dist', 'main.html'));
    } catch (err) {
      console.error(err);
    }
  };

  getItems = async (req, res) => {
    try {
      const allItems = await this.db.Item.findAll();
      res.status(200).send(allItems);
    } catch (err) {
      console.error(err);
    }
  };
}

export default ItemController;
