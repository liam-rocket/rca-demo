const sourcePath = "./dev";
const rooms = require(`${sourcePath}/rooms.json`);
const msesages = require(`${sourcePath}/messages.json`);

module.exports = {
  up: (queryInterface) => {
    const now = new Date();
    const timestamps = {
      createdAt: now,
      updatedAt: now,
    };

    return queryInterface.sequelize.transaction(async (transaction) => {
      try {
        console.log("Seeding rooms...");
        await queryInterface.bulkInsert(
          "rooms",
          rooms.map((data) => ({
            ...data,
            ...timestamps,
          })),
          { transaction }
        );

        console.log("Seeding messagse...");
        await queryInterface.bulkInsert(
          "messages",
          msesages.map((data) => ({
            ...data,
            ...timestamps,
          })),
          { transaction }
        );
      } catch (err) {
        console.log(err);
        transaction.rollback();
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      try {
        console.log("Unseeding messages...");
        await queryInterface.bulkDelete("messages", null, { transaction });

        console.log("Unseeding room...");
        await queryInterface.bulkDelete("rooms", null, { transaction });
      } catch (err) {
        console.log(err);
        transaction.rollback();
      }
    });
  },
};
