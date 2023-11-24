'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('student_classes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      student_id: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'students',
          key: 'id',
        },
      },
      class_id: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'classes',
          key: 'id',
        },
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('student_classes');
  },
};
