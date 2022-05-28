module.exports = {
  up: async (queryInterface) => {
    // Define category data
    const users = [
      {
        name: 'kai',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'jimmy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('users', users);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null);
  },
};
