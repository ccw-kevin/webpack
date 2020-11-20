const path = require('path')

module.exports = {
	mode: 'production',
	entry: {
		main: './src/index.js'
	},
	externals: ['lodash'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'library.js',
		// 不写library的配置，不能生成全局变量
		library: 'library', // umd 支持各种引入的方式，但是不识别script的标签引入，如果是需要，此时就需要library挂在一个全局的变量
		libraryTarget: 'umd', // 通用的接入方式，都可以让你正确的引入到
		libraryExport: 'default' // 取消通过script引入的包 取消外层的default
	}
}