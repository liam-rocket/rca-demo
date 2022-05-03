import { Sequelize } from 'sequelize';
import allConfig from '../../sequelize.config.cjs';

import initItemModel from './item.mjs';
import initCategoryModel from './category.mjs';

const env = process.env.NODE_ENV || 'development';
// this is the same as saying :
// const config = allConfig['development']
const config = allConfig[env];
const db = {};

// initiate a new instance of Sequelize
// note similarity to pool.query

let sequelize = new Sequelize(
  // database settings from config.js
  config.database,
  config.username,
  config.password,
  config
);

// here we are putting initItemModel from item.mjs into the object "db" (line 14)
db.Item = initItemModel(sequelize, Sequelize.DataTypes);
db.Category = initCategoryModel(sequelize, Sequelize.DataTypes);

// A    belongsTo     B
db.Item.belongsTo(db.Category);
// A      hasMany      B
db.Category.hasMany(db.Item);

// here we are putting the instance we created in line 28 into the object "db"
db.sequelize = sequelize;
// db = {
//     Item: initItemModel(sequelize, Sequelize.DataTypes),
//    sequelize: sequelize
// }

export default db;
