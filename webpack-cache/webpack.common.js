const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: {
		app: './src/index.js'
	},
	optimization: {
		// 针对老版本做的处理
		// runtimeChunk: {
		// 	name: 'runtime'
		// },
		minimizer: [new TerserJSPlugin({}), new OptimizeCssAssetsPlugin({})],
		splitChunks: {
			chunks: 'all', // 判断是否针对同步和异步的文件做单独打包 aysnc、all、initial
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					name: 'vendors'
				}
			}
    }
	},
	module: {
		rules:[{
			test: /\.css$/,
			use: [MiniCssExtractPlugin.loader, 'css-loader']
		}]
	},
	plugins: [
		// 自动清理打包文件
		new CleanWebpackPlugin(),
		//  提取css
		new MiniCssExtractPlugin({
			 filename: '[name].css',
       chunkFilename: '[id].css',
		}),
		// 自动生成打包后的入口文件 default index.html
		new HtmlWebpackPlugin({
			title: '开发环境',
			filename: './index.html'
		})
	]
} 