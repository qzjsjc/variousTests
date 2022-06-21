const path = require('path');
const fs = require('fs');
fs.readFile(path.resolve());
module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  externals: {
    './cptable': 'var cptable'
 }
}