const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/index.tsx'),
    output:{
        publicPath: "/"
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
            Components: path.join(__dirname, 'src/components'),
            Store: path.join(__dirname, 'src/store'),
            Util: path.join(__dirname, 'src/util'),
            Types: path.join(__dirname, 'src/types'),
            Assets: path.join(__dirname, 'assets'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ["url-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src/index.html"),
        }),
        new webpack.ProvidePlugin({ // inject ES5 modules as global vars
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Tether: 'tether'
          })
    ],
    devtool: "inline-source-map",
    devServer: {
        port: 3000,
        open: true,
        historyApiFallback:true,
        index:'index.html'
    }
};