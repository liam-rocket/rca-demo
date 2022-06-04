// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development', // or "production"
  entry: './src/index.js',
  resolve: {
    alias: {
      pg: path.join(__dirname, 'aliases/pg.js'),
    },
  },
  output: {
    filename: 'randomName.js',
    path: path.resolve(__dirname, 'RANDOM'),
  },
};
