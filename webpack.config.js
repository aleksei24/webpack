const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: { index: './src/index.js', print: './src/print.js' },
    devtool: 'inline-source-map',
    plugins: [new htmlWebpackPlugin({ title: 'Development' })],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    mode: 'development',
};
