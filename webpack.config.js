const path = require('path');

module.exports = {
  entry: {
      testA: './src/testA.js',
      testB: './src/testB.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};