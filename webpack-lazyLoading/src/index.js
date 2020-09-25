
// 异步
function asyncComponent() {
	return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
		let element = document.createElement('div')
		element.innerHTML = _.join(['aa', 'bb', 'cc'], '***')
		return element
	})
}
document.addEventListener('click', () => {
	asyncComponent().then(el => {
		document.body.appendChild(el)
	})
})