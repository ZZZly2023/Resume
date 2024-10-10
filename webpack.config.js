const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
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
    module: {
        rules:[
            {
                test: /.\jsx?$/,
                exclude: /node_modules/,
                include: /src/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        cacheCompression: false
                    }
                }
            },
            {
                include: /src/,
                test: /\.(css|less)$/i,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new webpack.ProvidePlugin({
            React: 'react'
        })
    ],
    resolve: {
        extensions: ['.jsx','.js']
    },
    devServer: {
        // static: './dist',
        open: true,
        host: 'localhost',
        port: '3000',
    }
}

module.exports = config