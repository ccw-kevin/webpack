const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	entry: {
		app: './src/index.js'
	},
	optimization: {
		splitChunks: {
			chunks: 'all' // 判断是否针对同步和异步的文件做单独打包 aysnc、all、initial
    }
	},
	output: {
		filename: '[name].js',
		// chunkFilename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules:[{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}]
	},
	plugins: [
		// 自动清理打包文件
		new CleanWebpackPlugin(),
		// 自动生成打包后的入口文件 default index.html
		new HtmlWebpackPlugin({
			title: '开发环境',
			filename: './index.html'
		})
	]
} 