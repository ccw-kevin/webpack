class CopyrightWebpackPlugin {
	// constructor() {
	// 	console.log('开始plugin编写。。。。。')
	// }
	apply(complier) {

		// complier 是webpack的实例，里面包含webpack的各种配置文件，并包含一些hooks
		// complier存放了我们配置里的所有类容，和打包相关的类容
		// compilation 是存放的是这一次的打包类容相关的类容
		complier.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
			console.log('todo .....compilation')
		})
		// tapAsync(pluginName, function)
		// 输出到	dist 目录之前
		complier.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
			debugger
			compilation.assets['copyright.txt'] = {
				source: function() {
					return 'copyright by PengGeng'
				},
				size: function() {
					return 21
				}
			}
			cb()
		})
	}
}

module.exports = CopyrightWebpackPlugin