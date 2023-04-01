/* eslint-disable import/extensions */
const Stripe = require('stripe');
const bodyParser = require('body-parser');
const express = require('express');
require('./environment');
const initializeSequelize = require('./src/db/models/index.js');
const AuthController = require('./src/controller/auth.controller');
const ProductController = require('./src/controller/product.controller');
const CheckoutController = require('./src/controller/checkout.controller');
const PaymentController = require('./src/controller/payment.controller');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const authController = new AuthController(stripe);
const productController = new ProductController(stripe);
const checkoutController = new CheckoutController(stripe);
const paymentController = new PaymentController(stripe);

const { PORT } = process.env;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(express.json());

app.get('/', async (req, res) => {
  res.status(200).json({ success: true });
});

app.post('/register', authController.registration);

app.get('/products', productController.getProducts);

app.get(
  '/checkout/custom/:customerId',
  checkoutController.createCustomCheckoutSession
);

app.get(
  '/checkout/:priceId/:quantity/:customerId',
  checkoutController.createCheckoutSession
);

app.get('/payments/:customerId', paymentController.getPaymentHistory);

const initializeApp = async () => {
  await initializeSequelize();
  app.listen(PORT);
  console.log(`🚀 App listening on the port ${PORT}`);
};

initializeApp();

// todo: 4 APIs
// create customer
// get product
// create checkout session
// get payment history

// webhooks
