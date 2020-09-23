
// 第二种方式
// import _ from 'lodash'

// console.log(_.join(['aa', 'bb', 'cc'], "-"))


/* 第三种方式 */

// one
function asyncComponent() {
	return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
		let element = document.createElement('div')
		element.innerHTML = _.join(['aa', 'bb', 'cc'], '***')
		return element
	})
}
asyncComponent().then(el => {
	document.body.appendChild(el)
})


// two
// async function twoComponent() {
// 	const {default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash')
// 	let element = document.createElement('div')
// 	element.innerHTML = _.join(['aa', 'bb', 'cc'], '***')
// 	return element
// }

// twoComponent().then(el => {
// 	document.body.appendChild(el)
// })