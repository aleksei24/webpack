const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '/dist',
    },
    output: {
        filename: 'webpack-numbers.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'webpackNumbers',
            type: 'umd',
        },
        clean: true,
    },
    mode: 'development',
};
