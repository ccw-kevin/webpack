const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
module.exports = {
	mode: 'development',
	optimization: {
		usedExports: true
	},
	// mode: 'production',
	// entry: {
	// 	app: './src/index.js'
	// },
	
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		// contentBase: './dist'
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9999,
		hot: true
	},
	module: {
		rules:[{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}]
	},
	plugins: [
		// 自动清理打包文件
		new CleanWebpackPlugin(['dist']),
		// 自动生成打包后的入口文件 default index.html
		new HtmlWebpackPlugin({
			title: '开发环境',
			filename: './index.html'
		}),
		// hot module replacement HMR
		new webpack.HotModuleReplacementPlugin(),
		//
		new webpack.optimize.ModuleConcatenationPlugin()
	]
}