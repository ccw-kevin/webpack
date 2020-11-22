class CopyrightWebpckPlugin {
	constructor() {}
	apply(compiler) {
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
	}
}

module.exports = CopyrightWebpckPlugin