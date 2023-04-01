class CheckoutController {
  constructor(stripe) {
    this.stripe = stripe;
    this.createCheckoutSession = this.createCheckoutSession.bind(this);
    this.createCustomCheckoutSession =
      this.createCustomCheckoutSession.bind(this);
  }

  async createCheckoutSession(req, res) {
    try {
      const { priceId, quantity, customerId } = req.params;

      // * https://stripe.com/docs/api/checkout/sessions/list
      const session = await this.stripe.checkout.sessions.create({
        success_url: 'https://example.com/success',
        line_items: [{ price: priceId, quantity }],
        mode: 'payment',
        customer: customerId,
      });

      res.status(200).send(session.url);

      // todo: (in the frontned)
      // window.location.href = session.url
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  async createCustomCheckoutSession(req, res) {
    try {
      const { customerId } = req.params;
      const { amountToChange, currency } = req.body;

      // * https://stripe.com/docs/api/checkout/sessions/list
      const session = await this.stripe.checkout.sessions.create({
        success_url: 'https://example.com/success',
        line_items: [
          {
            price_data: {
              currency,
              unit_amount: amountToChange,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        customer: customerId,
      });

      res.status(200).send(session.url);

      // todo: (in the frontned)
      // window.location.href = session.url
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

module.exports = CheckoutController;
