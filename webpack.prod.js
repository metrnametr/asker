const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ],
                exclude: /node_modules/,
    
            },
            {
                test: /\.(png|jpg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'img'
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new ImageminWebpWebpackPlugin(),
        new ImageminPlugin({
            pngquant: ({quality: 50}),
            plugins: [imageminMozjpeg({quality: 50})]
        })
    ]
}