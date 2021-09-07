const path = require('path');

module.exports = {
    mode: 'production', // mode by default
    // mode: 'development',
    entry: './src/index.js',

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    // if you need it, just use
    // devtool: 'source-map',

    devServer: {
        compress: true,
        hot: true,
    },
};
