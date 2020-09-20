
# splitchunk 代码分离

```
1. 如果包含一些重复的模块，重复的模块会打到各个bundle离main

2. 方法不能灵活的处理，代码的拆分，常常业务我们需要把一些公共的业务代码做抽离抽离处理来减少bundle的体积从而提升加载效率

splitChunksPlugin 可以提取公共的依赖模块


还有对其他做代码分离的插件
1.mini-css-extract-plugin: 用于将css 从主应用程序中分离
2.bundle-loader: 用于分离代码和延迟加载生成的bundle
3.promise-loader

```