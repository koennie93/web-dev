const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(
            {
                cleanOnceBeforeBuildPatterns: [ '!.git' ]
            }),
        new HtmlWebpackPlugin({
            title: 'Output Management'
     })
   ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../build')
    },
       module: {
         rules: [
             {
                 test: /\.css$/,
                 use: [
                   'style-loader',
                   'css-loader'
                 ]
             },
             {
                 test: /\.(png|svg|jpg|gif)$/,
                 use: [
                    'file-loader'
                 ]
             }
         ]
       }
};