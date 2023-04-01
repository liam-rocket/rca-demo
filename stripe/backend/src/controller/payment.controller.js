class PaymentController {
  constructor(stripe) {
    this.stripe = stripe;
    this.getPaymentHistory = this.getPaymentHistory.bind(this);
  }

  async getPaymentHistory(req, res) {
    try {
      const { customerId } = req.params;

      // * https://stripe.com/docs/api/payment_intents/list?lang=node
      const customerPaymentsResp = await this.stripe.paymentIntents.list({
        customer: customerId,
      });

      const customerPayments = customerPaymentsResp.data;

      res.status(200).json(customerPayments);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

module.exports = PaymentController;
