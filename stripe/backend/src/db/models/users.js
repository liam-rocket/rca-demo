/* eslint-disable comma-dangle */
const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        username: {
          type: DataTypes.STRING(255),
        },
        password: {
          type: DataTypes.STRING(255),
        },
        stripeId: {
          type: DataTypes.STRING(255),
        },
      },
      {
        sequelize,
        modelName: 'users',
      }
    );
  }

  static initAssociation() {}
}

module.exports = User;
