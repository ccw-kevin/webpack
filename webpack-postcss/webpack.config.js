const path = require('path')
module.exports = {
	mode: 'development',
	entry: {
		main: './index.js'
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						importLoaders: 1
					}
				}
				'postcss-loader'
				]
			}
		]
	}
}