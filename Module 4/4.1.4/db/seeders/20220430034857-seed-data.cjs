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

    // Bulk insert categories, returning=true,
    // and destructure the returned results array, for use in categoryItemData
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

    // Bulk insert categories, returning=true,
    // and destructure the returned results array, for use in categoryItemData
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
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('categoryItems', null, {});
    await queryInterface.bulkDelete('items', null, {});
    await queryInterface.bulkDelete('categories', null, {});
  },
};
