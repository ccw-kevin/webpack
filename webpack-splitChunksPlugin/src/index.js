// minSize：0 测绘default输出的包
// import test from './test'
// console.log(test.name)

// 同步
import _ from 'lodash'
let element = document.createElement('div')
element.innerHTML = _.join(['aa', 'bb', 'cc'], '***')
document.body.appendChild(element)


// 异步
// function asyncComponent() {
// 	return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
// 		let element = document.createElement('div')
// 		element.innerHTML = _.join(['aa', 'bb', 'cc'], '***')
// 		return element
// 	})
// }
// asyncComponent().then(el => {
// 	document.body.appendChild(el)
// })
