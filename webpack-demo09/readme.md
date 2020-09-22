
# webpack tree shaking 只支持ES module

```
1. 可以在package.json 使用  sideEffects: 'false' // 如果单一就可以使用此，否则会有影响
   也可以支持数据模式 sideEffects: []
2. 也可以使用命令来 tree shaking [--optimize-minimize]

3. mode: production
   new webpack.optimize.ModuleConcatenationPlugin();
   也可以实现treeShaking

注：mode: production webpack 就可以直接针对未使用的export 来做treeShaking

* 使用ES2015模块语法（即 ** import ** 和 ** export **）

* 使用mode 设置为 production， 启用minification(代码压缩) 和 tree shaking

tree-shaking默认是不会触发的。在webpack3，你需要配置babel，uglifyjs-webpack-plugin等才能触发。在webpack4，production模式默认触发

```