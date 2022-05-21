/* eslint-disable comma-dangle */
export default function initItemModel(sequelize, DataTypes) {
  return sequelize.define(
    'item',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        // docs: https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
        validate: {
          // isAlpha allows only alphanumeric characters.
          isAlpha: true,
          // This only allows strings of length 3 to 23.
          len: [3, 23],
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
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
