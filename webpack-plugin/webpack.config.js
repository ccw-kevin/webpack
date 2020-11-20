const path = require('path')
const CopyRightWebpackPlugin = require('./plugins/copyright-webpack-plugin')
module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	plugins: [
		// {
		// 		name: 'PengGeng'
		// 	}
		new CopyRightWebpackPlugin()
	]
}