const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
module.exports = {
	mode: 'development',
	entry: {
		app: './index.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
		// publicPath: '/' // 确保server.js 能找到对应的资源文件
	},
	devtool: 'cheap-inline-module-source-map',
	devServer: {
		// contentBase: './dist'
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9999,
		hot: true,
		hotOnly: true
	},
	module: {
		rules:[
		{
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
       //    options: {
       //    	"presets": [["@babel/preset-env", {
					  // 	"targets": {
					  //     "chrome": "67",
					  //     "safari": "11.1"
					  //   },
					  // 	"useBuiltIns": "usage",
					  // 	"corejs": "3.6.4"
					  // }]]
       //    }
        }
      },
      {
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
		}),
		// hot module replacement HMR
		new webpack.HotModuleReplacementPlugin()
	]
}