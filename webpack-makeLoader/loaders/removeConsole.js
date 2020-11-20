const parser = require('@babel/parser') // 将源码解析为AST
const traverse = require('@babel/traverse').default // 对AST节点进行递归遍历，生成一个便于操作、转换的path对象	
// const generator = require('@babel/generator').default // 将AST解码生成js代码
const core = require('@babel/core') // 将AST 还原到js代码
const t = require('@babel/types') // 对具体的AST进行增删改查

module.exports = function (source) {
	const ast = parser.parse(source, {
		sourceType: 'module'
	})
	// console.log(ast.program.body)
	traverse(ast,{
		CallExpression(path) {
			console.log(path.node.callee)
			// 使用@babel/types对node的节点做判断，看的的类型是否是isMemberExpression，并查看子节点是否isIdentifier,并且是name为console
			if(t.isMemberExpression(path.node.callee) && t.isIdentifier(path.node.callee.object, {name: 'console'})) {
				path.remove() // 删除节点
			}
		}
	})
	// let code = generator(ast, {}).code;
	let code = core.transformFromAstSync(ast).code
	return code
}