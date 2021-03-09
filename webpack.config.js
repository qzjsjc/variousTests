const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
      testA: './src/testA.js',
      testB: './src/testB.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js'
  },
  optimization: {
    chunkIds: 'named'
  }
};