module.exports = {
  up: async (queryInterface, Sequelize) => {
    // "categories" table needs to be created first because "items" references "categories".
    await queryInterface.createTable('categoryItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
      },
      itemId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'items',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Items table needs to be dropped first because Items references Categories
    await queryInterface.dropTable('categoryItems');
  },
};
