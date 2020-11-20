const path = require('path')

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	resolveLoader: {
		modules: ['node_modules', 'loaders'] // 查找loader的插件路径
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				// use: [path.resolve(__dirname, './loaders/replaceLoaders.js')]
				// 使用replaceloaders
				// use: [{
				// 	// loader: path.resolve(__dirname, './loaders/replaceLoaders.js'),
				// 	loader: 'replaceLoaders',
				// 	options: {
				// 		name: 'PengGeng111'
				// 	}
				// }]
				use: ['removeConsole']
			}
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	}
}