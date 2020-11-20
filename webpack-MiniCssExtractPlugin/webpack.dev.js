const webpack = require('webpack')
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const devConfig = {
	mode: 'development',
	optimization: {
		usedExports: true,
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		// contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9999,
		hot: true
	},
	plugins: [
		// hot module replacement HMR
		new webpack.HotModuleReplacementPlugin()
		
		// bundle analyse
		// new BundleAnalyzerPlugin()
	]
}
module.exports = merge(commonConfig, devConfig)