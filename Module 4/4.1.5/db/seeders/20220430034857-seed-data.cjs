module.exports = {
  up: async (queryInterface) => {
    // Define category data
    const categoryData = [
      {
        name: 'fish',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'healthy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'canned',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Bulk insert categories
    const [fishCategory, fruitCategory, healthyCategory, cannedCategory] =
      await queryInterface.bulkInsert('categories', categoryData, {
        returning: true,
      });

    // Define item data
    const itemData = [
      {
        name: 'banana',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'tuna',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'peach',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Bulk insert items
    const [banana, tuna, peach] = await queryInterface.bulkInsert(
      'items',
      itemData,
      { returning: true }
    );

    // Define category item data based on generated categories and items
    const categoryItemData = [
      // banana is a fruit
      {
        itemId: banana.id,
        categoryId: fruitCategory.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // banana is healthy
      {
        itemId: banana.id,
        categoryId: healthyCategory.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // tuna is fish
      {
        itemId: tuna.id,
        categoryId: fishCategory.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // tuna is canned
      {
        itemId: tuna.id,
        categoryId: cannedCategory.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // peach is fruit
      {
        itemId: peach.id,
        categoryId: fruitCategory.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // peach is canned
      {
        itemId: peach.id,
        categoryId: cannedCategory.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Bulk insert category items
    await queryInterface.bulkInsert('categoryItems', categoryItemData);

    // Define cart data, 2 carts
    const cartData = [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Bulk insert carts
    const [cart1, cart2] = await queryInterface.bulkInsert('carts', cartData, {
      returning: true,
    });

    // Define cart item data, i.e. put items in cart
    const cartItemData = [
      {
        quantity: 1,
        itemId: peach.id,
        cartId: cart1.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quantity: 2,
        itemId: banana.id,
        cartId: cart1.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quantity: 4,
        itemId: peach.id,
        cartId: cart2.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Bulk insert cart items
    await queryInterface.bulkInsert('cartItems', cartItemData);
  },

  down: async (queryInterface) => {
    // Delete rows from tables with foreign key references first
    await Promise.all([
      queryInterface.bulkDelete('categoryItems', null, {}),
      queryInterface.bulkDelete('cartItems', null, {}),
    ]);
    await Promise.all([
      queryInterface.bulkDelete('items', null, {}),
      queryInterface.bulkDelete('categories', null, {}),
      queryInterface.bulkDelete('carts', null, {}),
    ]);
  },
};
