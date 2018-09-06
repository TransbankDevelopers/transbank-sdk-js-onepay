/* global __dirname, require, module*/

const webpack = require('webpack');
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
const pkg = require('./package.json');

let libraryName = 'Onepay';

let outputFile, mode;

if (env === 'build') {
  mode = 'production';
  outputFile = libraryName.toLowerCase() + '.min';
} else {
  mode = 'development';
  outputFile = libraryName.toLowerCase();
}

const config = {
  mode: mode,
  entry: {
    merchant: [__dirname + '/src/onepay.js'],
    checkout: [__dirname + '/src/onepay-checkout.js']
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: '[name].' + outputFile + '.js',
    library: 'Onepay',
    libraryTarget: 'window',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  }
};

module.exports = config;
