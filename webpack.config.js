const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const path = require('path');



module.exports = {
    mode: "development",
    /*     devServer: {
            historyApiFallback: true,
            port: 4000,
            open: true,
            compress: true,
            hot: true
        }, */
    entry: {
        main: path.resolve(__dirname, "./src/js/index.js")


    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].bundle.js",
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    plugins: [new HtmlWebpackPlugin({
            title: "Webpack basic ",
            template: path.resolve(__dirname, "./src/index.html"),
            filename: "index.html",
            favicon: "./iconWeb.svg"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),

    ],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/inline',
            },
        ]
    }

}