module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('students', 'gender', {
      type: Sequelize.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('students', 'gender', {
      type: Sequelize.BOOLEAN,
    });
  },
};
