const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports ={
    entry: './first.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dista')
    },
    plugins: [new HtmlWebpackPlugin()],
    mode: 'production',
};