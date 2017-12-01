const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: ['babel-polyfill', './index.jsx'],
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].bundle.js',
    publicPath: '/static/',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /(\.jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ejs/,
        use: 'raw-loader',
      },
      {
        test: /\.(png|jpg|gif|woff2|woff|ttf|svg|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]_[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      filename: 'index.ejs',
      inject: 'body',
    }),
  ],
};
