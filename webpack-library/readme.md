## library 
### 别人引用我们自己开发的文件有哪些方式 有如下：

```js

	import library from 'libray' ES Module
	const libray = require('library') common.js
	require(['lirbary'], funciont(){}) AMD


```

### librayTarget 

> 1. this
> 2. window
> 3. global
> 4. commonjs
> 5. commonjs2
> 6. umd

```js
如果使用script 标签引入的，需要在全局注册一个变量 如：
<script src="library.js"></script>

library.math

需要使用添加: output.library

```

```js
library 与 libraryTarget 有时候需要配合使用

library: 'library' // 设置变量，
// umd： 如果是通用的引入模式，library 为全局变量， this： 那么就是指向的是当前的执行环境this上下文； window 就是挂在的window； node 环境下可以设置global
libraryTarget: 'umd'

externals: ['lodash'] // 剔除引入的第三方包文件，以防重复引入； 参数不仅仅是一个Array 也可以是一个Object
or
externals: {
	 // 这里指的是通过引入的方式引入lodash 必须名字为lodash
	 // 如：const lodash = require('lodash') 不能起为"_"
	commonjs: 'lodash',
	// 如果是通过script 引入的libray的库文件，因此他会在全局注册一个“_”的变量， 没有其他要求 root 可以忽略
	// 
	root: '_'
}

```

### 需要打包给别人用或者上传到npm上
 
one: 打开 package.json 修改main的为包文件的目录 './dist/index.js'
two: 打开npm网址 注册账号
three：npm adduser
four: npm publish

注： name 改为特别点 比如： peng_geng_20201011



