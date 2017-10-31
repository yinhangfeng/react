const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: './dist',
    port: 9000,
  },
});
