class CopyrightWebpackPlugin {
	// constructor() {
	// 	console.log('开始plugin编写。。。。。')
	// }
	apply(compiler) {

		// compiler 是webpack的实例，里面包含webpack的各种配置文件，并包含一些hooks
		// compiler 存放了我们配置里的所有类容，和打包相关的类容
		// compilation 是存放的是这一次的打包类容相关的类容
		compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
			console.log('todo .....compilation')
		})
		// tapAsync(pluginName, function)
		// 输出到	dist 目录之前
		compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
			console.log('tapAsync.......')
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
		// promise
		compiler.hooks.run.tapPromise('promiesAsync', (compilation, cb) => {
			return new Promise( resolve => {
				return setTimeout(resolve, 1000)
			}).then(() => {
				console.log('promise......')
			})
		})
		// 在webpack中 entry被处理过后调用
		compiler.hooks.entryOption.tap('MyPlugin', (context, entry) => {
	  	/* ... */
	  	console.log(entry)
		});
	}
}

module.exports = CopyrightWebpackPlugin