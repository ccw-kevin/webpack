const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	entry: {
		app: './src/index.js'
	},
	optimization: {
		splitChunks: {
			chunks: 'all', // 判断是否针对同步和异步的文件做单独打包 aysnc、all、initial
      minSize: 30000, // 判断包的体积大于多少才抽离单独打包 单位byte eg: 30kb
      maxSize: 0, // 设置一个抽离出来的包最大体积是多少 eg：如果一个包为1MB，然后这里设置为50000，此时会对此包做二次分割（其实并没什么卵用）
      minChunks: 1, // 当一个模块至少用了多少次之后才会被单独打包
      maxAsyncRequests: 5, // 同时加载的模块数，但webpack打包超过5个那么会打包前5个后面的就不会大包了
      maxInitialRequests: 3, // 整个网站首页或者入口文件加载的时候允许最多的加载模块数
      automaticNameDelimiter: '~', // 文件连接符
      name: true, // 使cacheGroups 的文件名生效
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/, // 判断引入的库是否在node_modules 下面
          priority: -10, // 匹配的优先级
          // filename: 'vendors.js' // 匹配的条件打包出来的文件名字 chunks 必须为 initial 见图：
          // name: 'vendors' // 此时 chunks 必须为 all / async 的模式
        },
        default: {
        	// minChunks: 2,
          priority: -20,
          reuseExistingChunk: true, // 某一个文件被使用了，那么才是大包这个文件的时候不会重复被大包了；eg：a文件引入b文件，在打包a文件已经把b文件打包了，那么b就再次被打包了
          filename: 'common.js' // 设置默认的参数单独抽离的名字
        }
      }
    }
	},
	output: {
		filename: '[name].bundle.js',
		// chunkFilename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules:[{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}]
	},
	plugins: [
		// 自动清理打包文件
		new CleanWebpackPlugin(),
		// 自动生成打包后的入口文件 default index.html
		new HtmlWebpackPlugin({
			title: '开发环境',
			filename: './index.html'
		})
	]
} 