const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    static associate(models) {
      this.belongsToMany(models.students, {
        through: models.studentClasses,
        key: 'class_id',
      });
    }
  }
  Class.init(
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
      modelName: 'classes',
      underscored: true,
      paranoid: true,
    }
  );
  return Class;
};
