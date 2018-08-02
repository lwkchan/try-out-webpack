const webpack = require('webpack');
const HtmlWebpackPlugin = require('hitml-webpack-plugin');

const port = process.env.PORT || 3000;
//
// module.exports = {
//
// }

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js'
  }
  devtool: 'inline-source-map',
  module: {
    rules: [
      // First Rule
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      // Second Rule
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules:true,
              camelCase: true,
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
}
