const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')
const path = require('path')

devConfig = {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, '..', 'dist'),
        port: 9000
    }
}

module.exports = merge.smart(baseConfig, devConfig) // Merging base config to this
