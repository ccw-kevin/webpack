const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: {
		app: './src/index.js',
		print: './src/print.js'
	},
	output: {
		filename: '[name].bundle.js',
		// publicPath: '/assets/',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		// 自动清理打包文件
		new CleanWebpackPlugin(), // version1.0.0 的版本 new ClenWebpackPlugin(['dist'],{})
		// 自动生成打包后的入口文件 default index.html
		new HtmlWebpackPlugin({
			title: 'output',
			template: './index.html'
		})
	]
}