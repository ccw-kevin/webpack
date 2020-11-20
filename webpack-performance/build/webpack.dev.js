const webpack = require('webpack')
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js')
const path = require('path')

const devConfig = {
	mode: 'development',
	optimization: {
		usedExports: true
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		// contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9999,
		hot: true
	},
	output: {
		filename: '[name].js',
		chunkFilename: '[name].js'
	},
	plugins: [
		// hot module replacement HMR
		new webpack.HotModuleReplacementPlugin()
	]
}
module.exports = merge(commonConfig, devConfig)