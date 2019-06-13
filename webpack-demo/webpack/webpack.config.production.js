const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')
const path = require('path')

devConfig = {
    mode: 'production',
    entry: path.resolve(__dirname, '..', 'src', 'js', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}

module.exports = merge.smart(baseConfig, devConfig) // Merging base config to this
