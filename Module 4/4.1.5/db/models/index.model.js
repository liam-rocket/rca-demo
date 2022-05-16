/* eslint-disable */
import sequelizePackage from 'sequelize';
import allConfig from '../../sequelize.config.cjs';

import initItemModel from './item.mjs';
import initCategoryModel from './category.mjs';
import initCartModel from './cart.mjs';
import initCartItemModel from './cartItem.mjs';

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

db.Item = initItemModel(sequelize, Sequelize.DataTypes);
db.Category = initCategoryModel(sequelize, Sequelize.DataTypes);
db.Cart = initCartModel(sequelize, Sequelize.DataTypes);
db.CartItem = initCartItemModel(sequelize, Sequelize.DataTypes);

// in order for the many-to-many to work we must mention the join table here.
db.Item.belongsToMany(db.Category, { through: 'category_items' });
db.Category.belongsToMany(db.Item, { through: 'category_items' });

// Connect Item and Cart models.
// Note: It's possible to use a Sequelize model class (i.e. CartItem)
// to connect the models Item and Cart instead of the table name (i.e. cart_items).
// Using variable is more robust than string because it's easier to detect typos.
db.Item.belongsToMany(db.Cart, { through: db.CartItem });
db.Cart.belongsToMany(db.Item, { through: db.CartItem });

// Define 1-M associations between CartItems table and associated tables
// to access CartItem attributes from Item and Cart instances
db.Item.hasMany(db.CartItem);
db.CartItem.belongsTo(db.Item);
db.Cart.hasMany(db.CartItem);
db.CartItem.belongsTo(db.Cart);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
