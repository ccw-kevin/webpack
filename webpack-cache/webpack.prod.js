const path = require('path')
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js')
const prodConfig = {
	mode: 'production',
	devtool: 'cheap-module-source-map',
	output: {
		filename: '[name].[contenthash].js',
		chunkFilename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist')
	},
}

module.exports = merge(commonConfig, prodConfig)