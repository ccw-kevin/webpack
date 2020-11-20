
# 缓存

```
output: {
	filename: [name].[contenthash].js
}

// 将runtime 代码拆分为一个单独的chunk
optimization: {
	runtimeChunk: 'single'
}

// 提取公共的common chunk 如： react， vue ，lodash

optimization: {
	runtimeChunk: 'single',
	splitChunks: {
		cacheGroups: {
			vendor: {
				test: /[\\/]node_module[\\/]/,
				name: 'vendors',
				chunks: 'all'
			}
		}
	}
}

每次build的时候 vendor 的hash都会有所变化，但是这一般都是依赖第三方库来做抽离的，
因此一般不会做改变，我们希望vendor每次打包hash 不做变化；只做更改的文件打包文件的hash变化

1. NamedModulesPlugin
2. HashedModuleIdsPlugin  new webpack.HashedModuleIdsPlugin() // 抽离的公共文件如果没有变更再次build hash是不会做更改的



library 发布打包

```
