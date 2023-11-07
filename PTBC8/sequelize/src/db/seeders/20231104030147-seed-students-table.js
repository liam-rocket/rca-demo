'use strict';

const students = [
  {
    first_name: 'Foong',
    last_name: 'Leung',
    mobile: '123456',
    gender: 'M',
  },
  {
    first_name: 'Jill',
    last_name: 'Goh',
    mobile: '123456',
    gender: 'F',
  },
];

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'students',
      students.map((student) => ({
        ...student,
        created_at: new Date(),
        updated_at: new Date(),
      }))
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('students', null, {});
  },
};
