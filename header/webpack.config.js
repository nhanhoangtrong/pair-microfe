const { resolve } = require('path');

module.exports = {
    mode: 'development',
    target: 'web',
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'header.js',
        library: 'header',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react"],
                },
            },
        ],
    },
};
