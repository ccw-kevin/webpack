
# webpack HMR hot-module-replacement

```

使用 webpack 的热模块加载
const webpack = require('webpack')

plugins: [
	new webpack.HotModuleReplacementPlugin()
]

可以监听 css vue react 组件等

提供多种loader来支撑热模块的加载 如：style-loader、css-loader、vue-loader


注：JS 的更新需要不依赖loader 就需要使用module.hot.accept('监听js文件', fn)


```