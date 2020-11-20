// loader 就是一个函数 不能使用箭头函数， 里面需要使用this的一些参数

// this.callback(
//   err: Error | null,
//   content: string | Buffer,
//   sourceMap?: SourceMap,
//   meta?: any
// );
const loaderUtils = require('loader-utils')
 
module.exports = function (source) {
	const options = loaderUtils.getOptions(this)
	console.log(options)
	// console.log(source) // loader 需要编译的文件
	// console.log(this.query) // loader options 的参数
	// return source.replace('PengGeng', '哈哈哈')
	// return source.replace('PengGeng', this.query.name)
	// return source.replace('PengGeng', options.name)
	const callback = this.async()
	
	setTimeout(()=>{
		const result =  source.replace('PengGeng', options.name)
		callback(null, result)
	}, 1000)

	// const result = source.replace('PengGeng', options.name)
	// this.callback(null, result)
	 
}
