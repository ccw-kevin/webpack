const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

const fs = require('fs')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')

const plugins = [
	// 自动清理打包文件
	new CleanWebpackPlugin(),
	// 自动生成打包后的入口文件 default index.html
	new HtmlWebpackPlugin({
		title: '开发环境',
		filename: './index.html',
		template: 'src/index.html'
	})
	// new AddAssetHtmlWebpackPlugin({
	// 	filepath: path.resolve(__dirname, '../dll/jquery.dll.js')
	// }),
	// new AddAssetHtmlWebpackPlugin({
	// 	filepath: path.resolve(__dirname, '../dll/react.dll.js')
	// }),
	// new AddAssetHtmlWebpackPlugin({
	// 	filepath: path.resolve(__dirname, '../dll/vendors.dll.js')
	// })
	// new webpack.DllReferencePlugin({
	// 	manifest: path.resolve(__dirname, '../dll/jquery.manifest.json')
	// }),
	// new webpack.DllReferencePlugin({
	// 	manifest: path.resolve(__dirname, '../dll/react.manifest.json')
	// }),
	// new webpack.DllReferencePlugin({
	// 	manifest: path.resolve(__dirname, '../dll/vendors.manifest.json')
	// })
]

const files = fs.readdirSync(path.resolve(__dirname, '../dll'))
files.forEach(file=>{
	if(/.*\.dll.js/.test(file)) {
		plugins.push(new AddAssetHtmlWebpackPlugin({
			filepath: path.resolve(__dirname, '../dll', file)
		}))
	}
	if(/.*\.manifest.json/.test(file)) {
		plugins.push(new webpack.DllReferencePlugin({
			manifest: path.resolve(__dirname, '../dll', file)
		}))
	}
})

module.exports = {
	entry: {
		main: './src/index.js'
	},
	module: {
		rules: [{ 
			test: /\.jsx?$/, 
			include: path.resolve(__dirname, '../src'),
			use: [{
				loader: 'babel-loader'
			}]
		}, {
			test: /\.(jpg|png|gif)$/,
			use: {
				loader: 'url-loader',
				options: {
					name: '[name]_[hash].[ext]',
					outputPath: 'images/',
					limit: 10240
				}
			} 
		}, {
			test: /\.(eot|ttf|svg)$/,
			use: {
				loader: 'file-loader'
			} 
		}]
	},
	// 针对老版本的webpack 需要加入runtime 来做映射，避免出现问题
	optimization: {
		runtimeChunk: {
			name: 'runtime'
		},
		usedExports: true,
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					name: 'vendors'
				}
			}
		}
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	performance: false, // webpack 命令行忽略警告
	output: {
		path: path.resolve(__dirname, '../dist')
	},
	plugins
}