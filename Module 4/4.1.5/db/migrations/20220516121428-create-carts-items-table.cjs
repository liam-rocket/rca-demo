'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cartItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // New: quantity is a non-foreign-key attribute in the through table.
      // To access this attribute in our app, we will want a CartItem model.
      quantity: {
        type: Sequelize.INTEGER,
      },
      cartId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'carts',
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
    queryInterface.dropTable('cartItems');
  },
};
