var path = require('path');
var webpack = require('webpack');

module.exports = [
    {
        context: path.join(__dirname, 'client'),
        entry: {
            index: './index.js'
        },
        output: {
            path: path.join(__dirname, 'client/public/js'),
            filename: './client.min.js'
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }],
        },
        resolve:{
            extensions: ['.js','.json','.jsx']
        },
        devServer: {
            contentBase: 'client',
            historyApiFallback: true // browser-historyを利用している場合のみ必須。
        }
    }
]