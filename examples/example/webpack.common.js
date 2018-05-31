const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  target: 'web', // <=== 默认是 'web'，可省略 https://doc.webpack-china.org/concepts/targets/
  entry: {
    app: './src/index.js',
    // print: './src/print.js',
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    // https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      hash: true,
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false, // 不止会加载当前目录的 所以要关闭 避免不同babel 版本冲突
            presets: [
              [
                '@babel/preset-env',
                {
                  modules: false,
                },
              ],
              [
                '@babel/preset-react',
                {
                  pragma: '__react_create_element',
                  useBuiltIns: true,
                  // development: true,
                },
              ]
            ],
            plugins: [
              '@babel/plugin-transform-runtime',
              [
                'babel-plugin-jsx-pragmatic',
                {
                  module: "react",
                  import: "__react_create_element",
                  export: "createElement",
                }
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
