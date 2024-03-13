const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",

    entry: path.resolve(__dirname, 'src', 'app.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src', 'index.html')})
    ],

    module: {
        rules: [
            {
                test: /\.png$/,
                type: 'asset/resource',
                generator: {
                    filename: path.join('assets', '[name][ext]')
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};
