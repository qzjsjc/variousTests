const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Stylus Test',
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.styl$/i,
        use: [
          {
            loader: "style-loader", // 从 JS 中创建样式节点
          },
          {
            loader: "css-loader", // 将 CSS 转为 CommonJS
          },
          {
            loader: "stylus-loader", // 将 Stylus 编译为 CSS
          },
        ],
      },
    ],
  },
};