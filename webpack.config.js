const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { title } = require('process');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'Output',
        }),
    ],
    output: {
        filename: 'webpack-numbers.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'webpackNumbers',
            type: 'umd',
        },
        clean: true,
    },
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_',
        },
    },
    mode: 'development',
};
