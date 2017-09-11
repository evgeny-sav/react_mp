const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (function() {
  return {
    entry: './src/index.jsx',
    output: {
      path: path.resolve('dist'),
      filename: 'index_bundle.js'
    },
    resolve: {
      extensions: ['.jsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /(\.jsx|\.js)$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: [ 'style-loader', 'css-loader', 'sass-loader' ]
        },
        {
          test: /\.(png|jpg|gif|woff2|woff|ttf|svg|eot)$/,
          use: [
            {
              loader: 'file-loader',
              options: {}
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        inject: 'body'
      }),
    ]
  }
})();
