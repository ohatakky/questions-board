var path = require('path');
var webpack = require('webpack');

module.exports = [
    {
        context: path.join(__dirname, 'client'),
        entry: {
            app: './app.js'
        },
        output: {
            path: path.join(__dirname, 'client/public/javascripts'),
            filename: '[name].js'
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/react', '@babel/preset-env']
                }
            }],
        },
        devServer: {
            contentBase: 'client'
        }
    }
]