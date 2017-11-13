/**
 * Created by shikuan on 2017/11/13.
 */
const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: {
        app: './src/app.js'
    },
    devtool: "cheap-module-eval-source-map",
    module: {
        loaders: [{
            test: /\.(jsx|js)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=25000'
        }]
    },
    plugins: [
    ],
    output: {
        filename: 'bundle.js' ,
        path: path.resolve(__dirname, 'dist')
    }
}
;