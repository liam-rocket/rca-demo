const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class StudentClassess extends Model {
    static associate(models) {
      this.belongsTo(models.classes);
      this.belongsTo(models.students);
    }
  }

  StudentClassess.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      student_id: {
        references: {
          model: 'students',
          key: 'id',
        },
        type: DataTypes.INTEGER,
      },
      class_id: {
        references: {
          model: 'classes',
          key: 'id',
        },
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'studentClasses',
      underscored: true,
      paranoid: true,
    }
  );
  return StudentClassess;
};
