const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')
const path = require('path')

devConfig = {
    mode: 'development',
    entry: path.resolve(__dirname, '..', 'src', 'js', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '..', 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, '..', 'dist'),
        port: 9000
    }
}

module.exports = merge.smart(baseConfig, devConfig) // Merging base config to this
