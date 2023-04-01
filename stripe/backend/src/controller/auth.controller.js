const UserModel = require('../db/models/users');

class AuthController {
  constructor(stripe) {
    this.stripe = stripe;
    this.registration = this.registration.bind(this);
  }

  async registration(req, res) {
    try {
      const { username, password, name } = req.body;

      // * https://stripe.com/docs/api/customers/create
      const newStripeCustomer = await this.stripe.customers.create({
        name,
        email: username,
      });

      const newUser = await UserModel.create({
        username,
        password,
        stripeId: newStripeCustomer.id,
      });

      res.status(200).json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = AuthController;
