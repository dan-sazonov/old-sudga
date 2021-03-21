const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {}
};
