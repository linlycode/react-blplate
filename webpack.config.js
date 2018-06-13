const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	context: path.resolve(__dirname, 'src'),
	entry: {
		app: './app.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
		],
	},
	plugins: [
		new HTMLWebpackPlugin({ chunks: ['app'], template: 'index.html' }),
	],
}
