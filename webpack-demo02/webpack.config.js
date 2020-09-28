const path = require('path')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: '[name]_[hash].js',
		path: path.resolve(__dirname, 'dist')
	}
}