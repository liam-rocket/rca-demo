const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      this.hasMany(models.studentAddresses);
      this.belongsToMany(models.classes, {
        through: models.studentClasses,
        key: 'student_id',
      });
    }
  }
  Student.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: { type: DataTypes.STRING(255) },
      last_name: { type: DataTypes.STRING(255) },
      mobile: { type: DataTypes.STRING(255) },
      gender: { type: DataTypes.STRING(255) },
      email: {
        type: DataTypes.STRING(255),
        // * added validation
        validate: {
          isEmail: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'students', // ! model name MUST match table name
      underscored: true,
    }
  );
  return Student;
};
