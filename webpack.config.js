module.exports = {
    mode: 'production', // mode by default
    // mode: 'development',
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
    },
};
