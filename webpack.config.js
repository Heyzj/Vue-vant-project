const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');//vue-loader在v15+增加

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    devServer: {
        open: true,
        port: 8080,
        contentBase: './src',
        hot: true
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: "index.html"
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.(jpg|png|mbp|gif|tif|webp|svg|bmp)$/, use: 'url-loader?limit=10000&[hash:8]-[name].[ext]'},
            {test: /\.(ttf|eot|otf|woff|woff2)$/, use: 'url-loader'},
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /\.vue$/, use: 'vue-loader'}
        ]
    }
    ,
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    }


}