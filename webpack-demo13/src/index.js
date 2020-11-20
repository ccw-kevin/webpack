import _ from 'lodash'
import { square } from './math.js'

// if(process.env.NODE_ENV !== 'production'){
// 	console.log('这不是一个production环境')
// }

// function component() {
// 	let element = document.createElement('div')
// 	element.innerHTML = [ 'hello webpack', '5 is square to' + square(5)].join('\n\n')
// 	// const btn = document.createElement('button')
// 	// element.innerHTML = _.join(['hello', 'webpack'], ' ')

// 	// btn.innerHTML = 'click there, look console 22'
// 	// btn.onclick= printMe
// 	// element.appendChild(btn)
// 	return element
// }

// // document.body.appendChild(component())
// let element = component()
// document.body.appendChild(element)


// 1.import() 模式
// function getComponent() {
// 	// let element = document.createElement('div')
// 	return import(/* webpackChunkName: "lodash" */ 'lodash').then(({default: _}) => {
// 		let element = document.createElement('div')
// 		element.innerHTML = _.join(['hello', 'webpack'], ' ')
// 		return element
// 	}).catch(err => {
// 		console.log(err)
// 	})
// }

// 2.async await 模式
// async function getComponent() {
// 	let element = document.createElement('div')
// 	const {default: _} = await import(/* webpackChunkName: 'lodash'*/ 'lodash')
// 	element.innerHTML = _.join(['async await', 'webpackChunkName'], ' ')
// 	return element
// }

// getComponent().then(res => {
// 	document.body.appendChild(res)
// })


// 3.lazy module 懒加载
function component() {
	let element = document.createElement('div')
	var button = document.createElement('button')
	var br = document.createElement('br')

	button.innerHTML = 'click me lazy module print'
	element.innerHTML = _.join(['hello', 'webpack', '5 square'+square(5)], ' ')
	element.appendChild(br)
	element.appendChild(button)

	button.onclick = e => {
		import(/* webpackChunkName: 'print'*/ './print').then(module => {
			let print = module.default
			print()
		})
	}
	return element
}

document.body.appendChild(component())


