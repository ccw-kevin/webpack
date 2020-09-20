const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config.js')
// 使用什么来编译
const compiler = webpack(config)

// 通知 express 使用 webpack-dev-middleware来监听文件变化
// 把webpack.config.js 配置文件作为基础配置
app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath || '/'
}))

// 设置监听端口 
app.listen(8888, function(){
	console.log('use express And webpackDevMiddleware listening on port 8888!\n')
})