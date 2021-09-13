const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const { name } = require('./package.json');

module.exports = {
    entry: {
        app: "./src/index"
    },
    mode: "development",
    devServer: {
        port: 3001,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    output: {
        publicPath: 'http://localhost:3001/',
        library: `${name}-[name]`,
        filename: '[name].js',
        libraryTarget: 'umd'
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
    experiments: {
        topLevelAwait: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "app1",
            remotes: {
                'app2plus': "app2plus@http://localhost:3002/remoteEntry.js",
            },
            shared: { react: { eager: true,  }, "react-dom": { eager: true,  } },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            // chunks: ['app2plus','app'],
            // chunksSortMode: "manual"
        }),
    ],
};