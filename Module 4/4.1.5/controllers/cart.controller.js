/* eslint-disable class-methods-use-this */
class ItemController {
  constructor(db) {
    this.db = db;
  }

  getModels = async (request, response, next) => {
    try {
      // Retrieve the 1st cart
      const carts = await this.db.Cart.findAll();
      console.log('1st cart');
      console.log(carts[0]);
      const cart = carts[0];

      // Get all items in the 1st cart
      // We don't use items below, but this is to demonstrate that accessing
      // associated data in a m2m relationship still works.
      const items = await cart.getItems();
      console.log('items');
      console.log(items);

      // Retrieve CartItem entries in the "through" or "join" table
      // that are associated with the 1st cart. We need to access CartItem
      // entries to obtain quantities for specific items in this cart.
      const cartItems = await cart.getCartItems();
      console.log('cart items');
      console.log(cartItems);

      // Retrieve the quantity of each item in the 1st cart
      for (let i = 0; i < cartItems.length; i += 1) {
        console.log('quantity: ', cartItems[i].quantity);
      }

      response.json(cartItems);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}

export default ItemController;
