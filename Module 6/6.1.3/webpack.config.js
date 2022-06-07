// webpack.config.js

const path = require('path');

module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // loaders
  module: {
    rules: [
      {
        test: /\.js$/, // this is regex, it tells webpack to look for all files which end in .js
        exclude: /node_modules/,
        use: {
          // this will automatically reference a .babelrc file
          loader: 'babel-loader',
        },
      },
    ],
  },
};
