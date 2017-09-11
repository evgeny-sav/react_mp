const merge = require('webpack-merge');
const webpackCommonConfig = require('./configs/webpack-common.config');
const webpackProdConfig = require('./configs/webpack-prod.config');
module.exports = merge(webpackCommonConfig, webpackProdConfig);
