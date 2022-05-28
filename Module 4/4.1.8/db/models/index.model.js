/* eslint-disable comma-dangle */
/* eslint-disable import/extensions */
import sequelizePackage from 'sequelize';
import allConfig from '../../sequelize.config.cjs';

import initUserModel from './user.mjs';
import initMessageModel from './message.mjs';

const { Sequelize } = sequelizePackage;
const env = process.env.NODE_ENV || 'development';
const config = allConfig[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.User = initUserModel(sequelize, Sequelize.DataTypes);
db.Message = initMessageModel(sequelize, Sequelize.DataTypes);

// creates a method in the
// user object with getSentMessages, etc.
// allows the use of include with sentMessages
db.User.hasMany(db.Message, {
  as: 'sentMessages',
  foreignKey: 'senderId',
});

db.User.hasMany(db.Message, {
  as: 'receivedMessages',
  foreignKey: 'receiverId',
});

// creates a method in the
// message object that has a user - the sender of the message
db.Message.belongsTo(db.User, {
  as: 'sender',
  foreignKey: 'senderId',
});

db.Message.belongsTo(db.User, {
  as: 'receiver',
  foreignKey: 'receiverId',
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
