const path = require('path')
const webpack = require('webpack')
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
	output: {
		filename: '[name].js',
		chunkFilename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		// hot module replacement HMR
		new webpack.HotModuleReplacementPlugin()
		
		// bundle analyse
		// new BundleAnalyzerPlugin()
	]
}
module.exports = devConfig