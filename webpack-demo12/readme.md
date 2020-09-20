
# 动态导入（dynamic imports）

```
1.import()
  import(/* webpackChunkName: '模块名字'*/ '模块名字').then(({default: "模块名简称"})=>{call}) // 回调函数
  import 返回的是一个pormise 可支持 async/await 简化写法
2.require.ensure

3. 预取/预加载模块(prefetch/ preload module)
   prefetch(预取)： 在浏览器闲置时间预取需要加载的模块
   a)import(/* webpackPrefetch: true */ '模块名字') ==》 <link ref="prefetch" href="模块.js"> 追加在页面头部
   b)import(/* webpackPreload: true */ '模块名字')  ==》 <link ref="preload" href="模块.js">

   preload chunk 在父chunk加载时加载， 并行方式加载 prefetch 会在父chunk加载结束后开始加载
   preload chunk 在父chunk中立即请求，prefetch chunk 在未来某一个时刻请求


 4. 懒加载

```