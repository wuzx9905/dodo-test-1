const base = require('./webpack.config')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = Object.assign({},base,{
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'doc'),
    },
    entry: {
        example: './example.tsx',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'example.html',
            filename:'example.html'
        })
    ]
})