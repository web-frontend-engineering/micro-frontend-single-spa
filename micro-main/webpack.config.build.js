const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
}
