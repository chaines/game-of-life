const path = require('path');

module.exports =  {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
    publicPath: '/',
    port: '3000',
  },
  module: {
    rules: [{
      test: /\.(ts|js)x?$/,
      exclude: [path.join(__dirname, 'node_modules/')],
      use: ['babel-loader']
    }, {
      test: /\.s(a|c)ss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }]
  }
}