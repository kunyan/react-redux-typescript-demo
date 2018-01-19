const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/App',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: 'tslint-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    // new webpack.DefinePlugin({
    //     'process.env.NODE_ENV': JSON.stringify('production')
    //   }),
    // new webpack.optimize.ModuleConcatenationPlugin(),
    // new UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
