const path = require('path')

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
}
