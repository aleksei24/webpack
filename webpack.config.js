const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    // mode: 'production', // mode by default
    // mode: 'development',
    mode: mode,

    entry: './src/index.js',

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [new MiniCssExtractPlugin()],

    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
