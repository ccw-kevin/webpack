import _ from 'lodash'
import printMe from './print.js'

function component() {
	let element = document.createElement('div')
	const btn = document.createElement('button')
	element.innerHTML = _.join(['hello', 'webpack', 'hello'], ' ')

	btn.innerHTML = 'click there, look console'
	btn.onclick= printMe
	element.appendChild(btn)
	return element
}

document.body.appendChild(component())