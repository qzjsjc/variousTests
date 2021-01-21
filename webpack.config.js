const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = 9010;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    historyApiFallback: {
      index: '/index.html'
    },
    compress: true,
    port,
    hot: true,
    open: true
  }
};