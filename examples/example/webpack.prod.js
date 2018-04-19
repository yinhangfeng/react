const webpack = require('webpack');
const merge = require('webpack-merge');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // https://webpack.js.org/concepts/mode/
  mode: 'production',
  // https://webpack.js.org/guides/production/#source-mapping
  devtool: 'source-map',
  plugins: [
    // mode: 'production' 自动启用UglifyJSPlugin
    // new UglifyJSPlugin({
    //   sourceMap: true,
    // }),

    // mode: 'production' 会自动设置process.env
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production'),
    //   },
    // }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
});
