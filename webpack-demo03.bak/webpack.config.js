const path = require('path')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				// 处理css
				test: /\.css$/,
				use: [
				'style-loader',
				{
					loader: 'css-loader'
				}, 'postcss-loader']
			},
			{
				// 处理 图片
				test: /\.(png|jpg|svg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				// 处理字体
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ['file-loader']
			}
		]
	}
}