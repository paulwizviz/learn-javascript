const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    plugins: [
        new CleanWebpackPlugin({
            verbose: true, // false by default
        }), // By default, this plugin will remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild.
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'src', 'index.html') // Creates a html file in dist
        }),
    ]
}