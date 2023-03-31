/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
const { Sequelize } = require('sequelize');
const UserModel = require('./users');

console.info('Initializing sequelize...');

const sqlInitialize = () =>
  new Sequelize(
    process.env.POSTGRES_DATABASE,
    process.env.POSTGRES_USERNAME,
    process.env.POSTGRES_PASSWORD,
    {
      host: process.env.POSTGRES_HOST,
      dialect: 'postgres',
      logging: false,
      pool: {
        min: 0,
        max: 50,
        idle: 10000,
        acquire: 30000,
      },
    }
  );

const sequelize = sqlInitialize();

const initModels = async (sequelizeInst) => {
  try {
    console.info('Initializing sequelize models...');
    await UserModel.initModel(sequelizeInst);
  } catch (error) {
    console.log(error);
  }
};

const initAssociation = async () => {
  try {
    console.info('Initializing sequelize associations...');
  } catch (error) {
    console.log(error);
  }
};

const initializeSequelize = async () => {
  await sequelize.authenticate();
  await initModels(sequelize);
  await initAssociation();
};

module.exports = initializeSequelize;
