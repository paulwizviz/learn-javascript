const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')
const path = require('path')

prodConfig = {
    mode: 'production'
}

module.exports = merge.smart(baseConfig, prodConfig) // Merging base config to this
