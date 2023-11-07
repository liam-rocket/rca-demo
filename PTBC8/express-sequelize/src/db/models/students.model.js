const { Model } = require('sequelize');
const studentAddressesModel = require('./studentAddresses.model');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      this.hasMany(models.studentAddresses);
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
    },
    {
      sequelize,
      modelName: 'students', // ! model name MUST match table name
      underscored: true,
    }
  );
  return Student;
};
