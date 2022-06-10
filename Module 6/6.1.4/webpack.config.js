const path = require('path');

module.exports = {
  mode: 'production',
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
        // this is regex, it tells webpack to look for files that end with .css
        test: /\.css$/,
        // the sequence here matters! style-loader needs to come before css-loader
        // because webpack reads these things from right to left
        use: [
          'style-loader',
          'css-loader', // step 2: injects Javascript into the DOM'css-loader', // step 1: turns css into valid Javascript
        ],
        // test: /\.scss$/,
        // // the sequence here matters! style-loader needs to come before css-loader
        // // because webpack reads these things from right to left
        // use: [
        //   'style-loader', // step 3: injects Javascript into the DOM
        //   'css-loader', // step 2: turns css into valid Javascript
        //   'sass-loader', // step 1: converts sass to css
        // ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // webpack will automatically reference a .babelrc file
          loader: 'babel-loader',
        },
      },
    ],
  },
};
