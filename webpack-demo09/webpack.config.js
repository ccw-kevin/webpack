const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
module.exports = {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	// mode: 'production',
	// devtool: 'cheap-module-source-map',
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
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
	optimization: {
    usedExports: true
	},
	plugins: [
		// 自动清理打包文件
		new CleanWebpackPlugin(),
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