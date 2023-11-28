module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('students', 'email', {
      type: Sequelize.STRING(255),
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('students', 'email');
  },
};
