// 1. 拿到文件，并读取
// 2. 高亮在控制台显示代码 npm install cli-highlight
// 3. 对文件的读取并转化为AST语法树做分析: npm install @babel/parser
// 4. 分析抽象语法树，找到对应的节点: npm install @babel/traverse --save
// 5. 路径组装，作为可适用于的打包识别的路径: dependencies 打包的时候需要存储绝对路径，不然找不到(或者相对于bundle的相对路径)
// 6. 转换AST的语法树可作为浏览器识别的语法: npm install @babel/core --save
// 8. 针对浏览器的低版本做ES6的兼容: npm install --save-dev @babel/preset-env
// 9. 涉及到多个模块的引入分析，需要对所有模块的遍历及递归 makeDependenciesGraph

const path = require('path');
const fs = require('fs');
const babelParser = require('@babel/parser');
const traverse = require("@babel/traverse").default;
const core = require("@babel/core");

// 对单个依赖模块的分析
const moduleAnalyser = (filename) => {
	const content = fs.readFileSync(filename, 'utf-8')
	const ast = babelParser.parse(content, {
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
	const { code } = core.transformFromAst(ast, null, {
		presets: ["@babel/preset-env"]
	})
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
			require('${entry}')
		})(${graph});
	`
}

// node 运行的在跟路径下，因此从跟路径下去找
// const moduleInfo = moduleAnalyser('./src/index.js');
// const graphInfo = makeDependenciesGraph('./src/index.js')

const code = generateCode('./src/index.js')
// console.log(moduleInfo)

// console.log(graphInfo)
console.log(code)



