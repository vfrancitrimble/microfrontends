const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: 'development',
    devServer: {
        port: 3031,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'drivers',
            filename: 'remoteEntry.js',
            exposes: {
                './DriversIndex': './src/index',
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};