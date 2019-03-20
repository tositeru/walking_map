const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: process.env.NODE_ENV === "dev" ? 'development' : 'production',
	entry: {
		main: './src/index.js',
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
				test:/\.pug$/,
				loader: 'pug-loader'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/html/index.pug'
		})
	]
};