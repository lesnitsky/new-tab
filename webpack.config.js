const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    app: './app.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(gif|jpe?g|png|svg)$/,
      loader: 'url-loader',
      query: { name: '[name].[hash:16].[ext]' }
    }]
  }
}
