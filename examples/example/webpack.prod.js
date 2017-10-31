const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // https://webpack.js.org/guides/production/#source-mapping
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    // https://webpack.js.org/guides/code-splitting/#prevent-duplication
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common', // Specify the common bundle's name.
    }),
  ],
});
