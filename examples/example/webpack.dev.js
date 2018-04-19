const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    filename: '[name].bundle.dev.js',
  },
  // https://webpack.js.org/concepts/mode/
  mode: 'development',
  devtool: 'inline-source-map',
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: './dist',
    port: 9002,
  },
  plugins: [
    // 将 react 中的 __DEV__ 替换为 true 但其实build/packages/react 里面并没有__DEV__ 变量, 未编译的react 源码中才有，为什么?
    new webpack.DefinePlugin({
      '__DEV__': true,
    }),
    // new webpack.optimize.ModuleConcatenationPlugin(),
  ],
});
