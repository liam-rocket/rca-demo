/* eslint-disable comma-dangle */
export default function initCartItemModel(sequelize, DataTypes) {
  return sequelize.define(
    'cartItems',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      // We define the CartItem model to access quantities of items in carts.
      quantity: {
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    }
    // {
    //   // The underscored option makes Sequelize reference snake_case names in the DB.
    //   underscored: true,
    // }
  );
}
