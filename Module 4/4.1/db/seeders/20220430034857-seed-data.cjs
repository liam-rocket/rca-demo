module.exports = {
  up: async (queryInterface) => {
    const categoriesList = [
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
        name: 'meat',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Insert categories before items because items reference categories
    let categories = await queryInterface.bulkInsert(
      'categories',
      categoriesList,
      { returning: true }
    );

    const items = [];
    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];

      items.push({
        name: 'some item',
        categoryId: category.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      items.push({
        name: 'other item',
        categoryId: category.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      items.push({
        name: 'iitemmm',
        categoryId: category.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    queryInterface.bulkInsert('items', items);
  },

  down: async (queryInterface) => {
    // Delete item before category records because items reference categories
    await queryInterface.bulkDelete('items', null, {});
    await queryInterface.bulkDelete('categories', null, {});
  },
};
