const path = require('path')
module.exports = {
	entry: './src/index.tsx',
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/
		}]
	}
}