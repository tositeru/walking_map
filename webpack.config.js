const path = require('path');
//const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    //mode: 'development',
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'docs')
    }
    //plugins: [new CleanWebpackPlugin()]
};