
import './style.css'
import './style1.css'
console.log('Peng Geng')

// // 异步
// function asyncComponent() {
// 	return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
// 		let element = document.createElement('div')
// 		element.innerHTML = _.join(['aa', 'bb', 'cc'], '***')
// 		return element
// 	})
// }
// // 异步加载
// document.addEventListener('click', () => {
// 	asyncComponent().then(el => {
// 		document.body.appendChild(el)
// 	})
// })