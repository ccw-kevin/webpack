
# 生产环境

```
1. merge 申明 const { merge } = require('webpack-merge')
   webpack 4.x 的版本中文文档有点小问题： const merge = require('webpack-merge')
   webpack-merge 主要是为了根据环境来打包作区分而针对配置文件做剥离

2. devtool： source-map; 避免在生产中使用 inline-*** 和 eval-***，因为它们会增加 bundle 体积大小，并降低整体性能。

```