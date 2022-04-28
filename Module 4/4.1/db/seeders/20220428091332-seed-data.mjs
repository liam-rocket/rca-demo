module.exports = {
  up: async (queryInterface) => {
    const categoriesList = [
      {
        name: 'fish',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'fruit',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'meat',
        created_at: new Date(),
        updated_at: new Date(),
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
        category_id: category.id,
        created_at: new Date(),
        updated_at: new Date(),
      });

      items.push({
        name: 'other item',
        category_id: category.id,
        created_at: new Date(),
        updated_at: new Date(),
      });

      items.push({
        name: 'iitemmm',
        category_id: category.id,
        created_at: new Date(),
        updated_at: new Date(),
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
