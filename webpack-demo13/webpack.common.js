const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		// filename: '[name].bundle.js',
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist')
	},
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'cache output'
		}),
		new webpack.HashedModuleIdsPlugin()
	]
}
		
