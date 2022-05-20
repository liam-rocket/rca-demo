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
    await queryInterface.bulkInsert('categories', categoryData);

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
    await queryInterface.bulkInsert('items', itemData);
  },

  down: async (queryInterface) => {
    // Delete rows from tables with foreign key references first
    await Promise.all([
      queryInterface.bulkDelete('items', null, {}),
      queryInterface.bulkDelete('categories', null, {}),
    ]);
  },
};
