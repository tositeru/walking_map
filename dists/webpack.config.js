var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    mode: process.env.NODE_ENV === "dev" ? 'development' : 'production',
    entry: {
        main: './src/index.ts',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'docs')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'docs')
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', 'ts', 'js']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/html/index.pug'
        })
    ]
};
//# sourceMappingURL=webpack.config.js.map