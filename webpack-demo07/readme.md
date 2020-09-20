
# webpack 提供几种可选方式，帮助你在代码发生变化后自动编译代码：

## webpack watch mode(webpack 观察模式)
## webpack-dev-server
## webpack-dev-middleware
```

webpack watch 可以监听到代码的改变，不需要手动去打包编译，他不会退出有退出命令，而且需要刷新浏览器才会看到页面内容的更新
1. npm run watch 重新运行才会生成 index.html 因为使用cleanWebpackPlugin index.html会删除 需要注意

```

### webpack-dev-server

```

npm install --save-dev webpack-server

devServer: {
	contentBase: paht.join(__dirname, 'dist'),
	compress: true,
	port: 9999
}

```

### webpack-dev-middleware

```

依赖node.js express
npm install --save-dev express webpack-dev-middleware
使用node.js来监听文件的变化
1、创建 server.js 利用webpack.config.js 配置 设置监听 做到文件的变化的监听
2、设置监听端口 在package.json 配置 运行命令如： server: node server.js


```