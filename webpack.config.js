var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: require('path').resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
      enforce: "pre",
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "eslint-loader"
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      loaders: ["style-loader", "css-loader", "sass-loader"]
    }]
  }
}
