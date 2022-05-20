/* eslint-disable comma-dangle */
// export default function initItemModel(sequelize, DataTypes) {
//   return sequelize.define(
//     'item',
//     {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: DataTypes.INTEGER,
//       },
//       name: {
//         type: DataTypes.STRING,
//       },
//       createdAt: {
//         allowNull: false,
//         type: DataTypes.DATE,
//       },
//       updatedAt: {
//         allowNull: false,
//         type: DataTypes.DATE,
//       },
//     },
//     {
//       // The underscored option makes Sequelize reference snake_case names in the DB.
//       // underscored: true,
//     }
//   );
// }

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
      },
      categoryId: {
        type: DataTypes.INTEGER,
        // This links the categoryId column to the id column in the categories table
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
    },
    {
      // The underscored option makes Sequelize reference snake_case names in the DB.
      // underscored: true,
    }
  );
}
