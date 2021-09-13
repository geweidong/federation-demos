const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { name } = require('./package.json');

module.exports = {
    entry: {
        app: "./src/index"
    },
    mode: "development",
    devServer: {
        port: 3002,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    experiments: {
        topLevelAwait: true,
    },
    output: {
        filename: '[name].[contenthash].js',
        publicPath: 'http://localhost:3002/',
        library: `${name}-[name]`,
        libraryTarget: 'umd',
        chunkLoadingGlobal: `webpackJsonp_${name}`,
        globalObject: 'window',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react"],
                    plugins: ['@babel/plugin-syntax-top-level-await'],
                },
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "app2plus",
            library: { type: "var", name: "app2plus" },
            filename: "remoteEntry.js",
            exposes: {
                "./Button": "./src/Button",
            },
            shared: { react: { eager: true,  }, "react-dom": { eager: true,  } },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            chunks: ['app2plus','app'],
            chunksSortMode: "manual"
        }),
    ],
};