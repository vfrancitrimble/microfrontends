const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: 'development',
    devServer: {
        port: 3030,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                drivers: 'drivers@http://localhost:3031/remoteEntry.js',
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],
}