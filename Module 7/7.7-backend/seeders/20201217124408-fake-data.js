const faker = require('faker');

module.exports = {
  up: async (queryInterface) => {
    const itemsList = [];

    for (let i = 0; i < 100; i += 1) {
      itemsList.push({
        name: faker.commerce.product(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    try {
      const result = await queryInterface.bulkInsert('items', itemsList);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('items', null, {});
  },
};
