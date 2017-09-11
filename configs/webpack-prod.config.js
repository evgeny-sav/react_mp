const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (function() {
  return {
    plugins: [
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'vendor',
      //   minChunks: 2
      // }),
      new UglifyJSPlugin()
    ]
  }
})();
