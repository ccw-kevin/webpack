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
					 // importLoaders: 2, // 如果有引入的 css 文件，那么引入的文件还是需要走下面的css-loader去做解析
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
					{
						loader: 'url-loader',
						options: {
							outputPath: 'images/',
							name: '[name]_[hash:7].[ext]',
							limit: 204800
						}
					}
				]
			}
		]
	}
}