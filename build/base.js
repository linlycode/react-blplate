const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		home: './src/home.js',
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'home.html',
			title: 'React App',
			template: 'src/template.html',
		}),
	],
	output: {
		filename: '[name].js',
		path: path.resolve(path.dirname(__dirname), 'dist'),
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
}
