// import _ from 'lodash'
// const element = document.createElement('div')
// element.innerHTML = _.join(['Peng', 'Geng'], '--')
// document.addEventListener('click', () => {
// 	document.body.appendChild(element)
// })

// 异步
function asyncComponent() {
	return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
		let element = document.createElement('div')
		element.innerHTML = _.join(['aa', 'bb', 'cc'], '***')
		return element
	})
}
// 异步加载
document.addEventListener('click', () => {
	asyncComponent().then(el => {
		document.body.appendChild(el)
	})
})


// preload or prefetch

// document.addEventListener('click', () => {
// 	import(/* webpackPrefetch: true */  './click.js').then(({default: func}) => {
// 		func()
// 	})
// 	// let element = document.createElement('div')
// 	// element.innerHTML = 'Peng Geng'
// 	// document.body.appendChild(element)
// })