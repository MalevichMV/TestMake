'use strict';

let path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, "./src/js/script.js"),
  output: {
    filename: 'assets/js/bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  devServer: {
    watchFiles: ['src/*.html'],
    port: 8081,
    open: true
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 
          {
            loader: 'css-loader',
            options: { url: false, importLoaders: 1 }
          }, 
          'postcss-loader', 
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
    }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'), 
        filename: 'index.html',
        minify: {
          collapseWhitespace: isProd
        }
      }),
      new MiniCssExtractPlugin({
      filename: 'assets/css/style.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/img", to: "assets/img" }
      ],
    })
  ]
};
