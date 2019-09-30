const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: `${SRC_DIR}/index.js`,
    output: {
      path: BUILD_DIR,
      filename: 'bundle.js',
    },
    mode: 'development',
    devServer: {
        host: '0.0.0.0',
        contentBase: BUILD_DIR,
        port: 3030,
        historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            fix: true
          }
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ 
        template: path.resolve(SRC_DIR,'index.html')
      }),
      new ErrorOverlayPlugin()
    ],
    devtool: 'cheap-module-source-map'
}

