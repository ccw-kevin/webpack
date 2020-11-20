const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './dist')
		// publicPath: '/' // 确保server.js 能找到对应的资源文件
	},
	devtool: 'inline-source-map',
	devServer: {
		// contentBase: './dist'
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9999
	},
	plugins: [
		// 自动清理打包文件 { cleanStaleWebpackAssets: false }
		// new CleanWebpackPlugin(),
		// 自动生成打包后的入口文件 default index.html
		new HtmlWebpackPlugin({
			title: 'devServer',
			filename: './index.html'
		})
	]
}