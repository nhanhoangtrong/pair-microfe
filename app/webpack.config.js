const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    mode: "development",
    target: 'web',
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        port: 3001,
        allowedHosts: 'all',
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
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
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public/index.html"),
        }),
    ]
}