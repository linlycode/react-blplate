const path = require('path')

module.exports = {
	entry: {
		context: path.resolve(__dirname, 'src'),
		app: 'app.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
}
