const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash:6].boundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        template: './template/index.html'
    })],
    devServer: {
        static: './dist',
        open: true,
        host: 'localhost',
        port: '3000',
    }
}

module.exports = config