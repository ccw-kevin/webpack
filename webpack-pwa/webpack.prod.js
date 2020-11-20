const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js')
const WorkboxPlguin = require('workbox-webpack-plugin')
const prodConfig = {
	mode: 'production',
	devtool: 'cheap-module-source-map',
	plugins: [
		new WorkboxPlguin.GenerateSW({
			clientsClaim: true,
			skipWaiting: true
		})
	]
}

module.exports = merge(commonConfig, prodConfig)