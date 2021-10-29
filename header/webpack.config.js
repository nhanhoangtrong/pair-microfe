const { resolve } = require('path');
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

function getConfig(target = 'web') {
    return {
        mode: 'development',
        target: target,
        entry: './src/index.js',
        devServer: {
            static: {
                directory: path.join(__dirname, "dist"),
            },
            port: 3002,
            allowedHosts: 'all',
        },
        output: {
            path: resolve(__dirname, 'dist/' + target),
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
        plugins: [
            new ModuleFederationPlugin({
                name: 'header',
                filename: 'remote.js',
                exposes: {
                    './Header': './src/index.js'
                },
                shared: {
                    react: {
                        singleton: true,
                        eager: true
                    },
                    "react-dom": {
                        singleton: true,
                        eager: true
                    }
                }
            })
        ]
    };
}

module.exports = [getConfig('web'), getConfig('node')];
