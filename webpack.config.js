const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: { import: './src/index.js', dependOn: 'shared' },
        another: { import: './src/another_module.js', dependOn: 'shared' },
        shared: 'lodash',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '/dist',
    },
    plugins: [new htmlWebpackPlugin({ title: 'Development' })],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    mode: 'development',
};
