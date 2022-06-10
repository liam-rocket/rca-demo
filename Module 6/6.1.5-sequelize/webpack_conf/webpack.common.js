// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// const path = require('path');

const config = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name]-[contenthash].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    // Replace previously-compiled files with latest one on each build
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Name this file main so it does not get automatically requested as a static file
      filename: 'main.html',
      template: path.resolve(__dirname, '..', 'src', 'main.html'),
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        // Regex to decide which files to run Babel on
        test: /\.(js|mjs|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
};

export default config;
