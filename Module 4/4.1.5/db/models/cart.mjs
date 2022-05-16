/* eslint-disable comma-dangle */
export default function initCartModel(sequelize, DataTypes) {
  return sequelize.define(
    'cart',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
