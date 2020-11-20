const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js')
const prodConfig = {
	mode: 'production',
	devtool: 'cheap-module-source-map',
	output: {
		filename: '[name].[contenthash:7].js',
		chunkFilename: '[name].[contenthash:7].js'
	}
}

module.exports = merge(commonConfig, prodConfig)