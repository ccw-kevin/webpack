const path = require('path')
const webpack = require('webpack')

module.exports = {
	entry: {
		// 常用的就是
		vendors: ['react', 'react-dom', 'lodash','jquery']
		// vendors: ['lodash'],
		// react: ['react', 'react-dom'],
		// jquery: ['jquery']
	},
	output: {
		filename: '[name].dll.js',
		path: path.resolve(__dirname, '../dll'),
		library: '[name]'
	},
	plugins: [
		new webpack.DllPlugin({
			name: '[name]',
			path: path.resolve(__dirname, '../dll/[name].manifest.json')
		})
	]
}