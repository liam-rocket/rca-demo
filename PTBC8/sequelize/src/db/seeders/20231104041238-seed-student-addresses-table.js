'use strict';

const studentsAddresses = [
  {
    student_id: 1,
    addresses: 'HK',
  },
  {
    student_id: 1,
    addresses: 'SG',
  },
];

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'student_addresses',
      studentsAddresses.map((studentAddress) => ({
        ...studentAddress,
        created_at: new Date(),
        updated_at: new Date(),
      }))
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('student_addresses', null, {});
  },
};
