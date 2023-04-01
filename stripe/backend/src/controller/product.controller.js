/* eslint-disable no-await-in-loop */
class ProductController {
  constructor(stripe) {
    this.stripe = stripe;
    this.getProducts = this.getProducts.bind(this);
  }

  async getProducts(req, res) {
    try {
      // * https://stripe.com/docs/api/products/create
      const productsResp = await this.stripe.products.list({});

      // * this is the actual list of products in an array
      const allProducts = productsResp.data;

      // const productWithPrices = allProducts.map(async (product) => {
      //   const pricesResp = await this.stripe.prices.list({
      //     product: product.id,
      //   });
      //   return { ...product, prices: pricesResp.data };
      // });
      // const resolvedPromise = await Promise.all(productWithPrices);

      const productsWithPrices = [];

      // eslint-disable-next-line no-restricted-syntax
      for (const product of allProducts) {
        // * https://stripe.com/docs/api/prices/list
        const pricesResp = await this.stripe.prices.list({
          product: product.id,
        });

        const productWithPrices = {
          ...product,
          prices: pricesResp.data,
        };

        productsWithPrices.push(productWithPrices);
      }

      res.status(200).json(productsWithPrices);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = ProductController;
