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
						modules: true
					}
				},
				'postcss-loader'
				]
			},
			{
				// 处理 图片
				test: /\.(png|jpg|svg|gif)$/,
				use: [
					'file-loader'
				]
			}
		]
	}
}