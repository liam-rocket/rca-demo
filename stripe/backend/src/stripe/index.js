const Stripe = require('stripe');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

console.log(stripe);

const createProducts = () => {
  stripe.products
    .create({
      name: 'Starter Subscription',
      description: '$12/Month subscription',
    })
    .then((product) => {
      stripe.prices
        .create({
          unit_amount: 1200,
          currency: 'usd',
          recurring: {
            interval: 'month',
          },
          product: product.id,
        })
        .then((price) => {
          console.log(
            'Success! Here is your starter subscription product id: ' +
              product.id
          );
          console.log(
            'Success! Here is your premium subscription price id: ' + price.id
          );
        });
    });
};
