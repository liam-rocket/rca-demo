const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Names extends Model {}
  Names.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: { type: DataTypes.STRING(255) },
    },
    {
      sequelize,
      modelName: 'names',
      underscored: true,
      paranoid: true,
    }
  );
  return Names;
};
