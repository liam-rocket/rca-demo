const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class StudentAddress extends Model {
    static associate(models) {
      this.belongsTo(models.students);
    }
  }
  StudentAddress.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      student_id: {
        type: DataTypes.STRING(255),
        references: {
          model: 'students',
          key: 'id',
        },
      },
      addresses: { type: DataTypes.STRING },
      created_at: { type: DataTypes.DATE },
      updated_at: { type: DataTypes.DATE },
    },
    {
      sequelize,
      modelName: 'studentAddresses',
      underscored: true,
    }
  );
  return StudentAddress;
};
