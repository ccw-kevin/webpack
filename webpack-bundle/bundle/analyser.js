// 1. 要想分析某一个模块那么我们就需要拿到这个文件
// 2. 读取此模块文件，并输出查看是否一样
// 3. 高亮在控制台显示代码 npm install cli-highlight
// 4. 转化为抽象语法树: npm install @babel/parser
// 5. 分析抽象语法树，遍历Node的节点: npm install @babel/traverse --save
// 6 dependencies 打包的时候需要存储绝对路径，不然找不到(或者相对于bundle的相对路径)
// 7 需要把ast的需要转换为浏览器的识别语: npm install @babel/core --save
// 8 我们使用了es6的语法，所以需要转换下,兼容浏览器: npm install --save-dev @babel/preset-env
// 9.对多个模块的依赖分析 makeDependenciesGraph

const path = require('path');
const fs = require('fs');
const babelParser = require('@babel/parser');
const traverse = require("@babel/traverse").default;
const core = require("@babel/core");

// 对单个依赖模块的分析
const moduleAnalyser = (filename) => {
	const constent = fs.readFileSync(filename, 'utf-8')
	const ast = babelParser.parse(constent, {
		sourceType: 'module' // 可支持 ES Module的模式
	})
	// console.log(ast.program.body)
	let dependencies = {} // 需要存储对象，所以需要类型为{}
	traverse(ast, {
		// 找到 ImportDeclaration类型的node 节点
		ImportDeclaration({ node }) {
			// node 节点下有source节点，节点下有个value的值对应的模块名字
			// console.log(node)
			const dirname = path.dirname(filename)
			console.log(dirname)
			// path.join(dirname, node.source.value) =》 src/message.js
			// 需要增加当前的路径 './'
			const newFilePath = './' + path.join(dirname, node.source.value)
			// console.log(newFilePath)
			// dependencies.push(node.source.value)
			dependencies[node.source.value] = newFilePath
		}
	});
	// console.log(dependencies)
	const code = core.transformFromAst(ast, null, {
		presets: ["@babel/preset-env"]
	}).code
	// console.log(code)
	return {
		filename,
		dependencies,
		code
	}
}

// 对多个模块的依赖分析
const makeDependenciesGraph = (entry) => {
	const entryModule = moduleAnalyser(entry)
	// console.log(entryModule)
	// 定义一个数组
	const graphArray = [ entryModule ]
	for(let i = 0; i < graphArray.length; i++) {
		const item = graphArray[i];

		const { dependencies } = item
		if(Object.getOwnPropertyNames(dependencies).length) {
			for(let j in dependencies) {
				// moduleAnalyser[dependencies[j]]
				graphArray.push(moduleAnalyser(dependencies[j]))
			}
		}
	}
	// console.log(graphArray)
	// 数据组装生成对象 array转换为obj 注: array打包不太容易
	const graphObj = {}
	graphArray.forEach(item => {
		graphObj[item.filename] = {
			dependencies: item.dependencies,
			code: item.code
		}
	})
	// console.log(graphObj) 
	return graphObj
}

// makeDependenciesGraph well
const makeDependenciesGraphBeta = entry => {
	const graph = {}
	const analyser = entry => {
		const { filename, dependencies, code } = moduleAnalyser(entry)
		graph[filename] = {
			dependencies,
			code
		}
		if(Object.getOwnPropertyNames(dependencies).length) {
			for(let i in dependencies) {
				if(!graph[dependencies[i]]) {
					analyser(dependencies[i])
				}
			}
		}
	}
	analyser(entry)
	return graph
}

// 生成浏览器可运行的代码

const generateCode = (entry) => {
	const graph = JSON.stringify(makeDependenciesGraph(entry))
	// 1. 没有require() 函数，我们需要构造一个
	// 2. 查看code的内容后，会执行一个require('./message.js')的类容，因此我们需要去查找此内容，并执行
	// 3. 根据传入的module，找到对应对象的获取属性key: dependdencies的key的内容 
	// 4. 返回 require(graph[module].dependencies[relativePath])
	// 5. 闭包返回三个参数 require [function]; export [Object]; code [String]
	// 6. 输出代码直接在控制台运行
	return `
		(function(graph){
			function require(module) {
				function localRequire(relativePath) {
					return require(graph[module].dependencies[relativePath])
				}
				var exports = {};
				(function(require, exports, code){
					eval(code)
				})(localRequire, exports, graph[module].code);

				return exports;
			};
			require(${entry})
		})(${graph});
	`
}

// node 运行的在跟路径下，因此从跟路径下去找
// const moduleInfo = moduleAnalyser('./src/index.js');
// const graphInfo = makeDependenciesGraph('./src/index.js')

const code = generateCode('./src/index.js')
// console.log(moduleInfo)

// console.log(graphInfo)
// console.log(code)



