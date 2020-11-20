import { square } from './math.js'

if(process.env.NODE_ENV !== 'production'){
	console.log('这不是一个production环境')
}

function component() {
	let element = document.createElement('div')
	element.innerHTML = [ 'hello webpack', '5 is square to' + square(5)].join('\n\n')
	// const btn = document.createElement('button')
	// element.innerHTML = _.join(['hello', 'webpack'], ' ')

	// btn.innerHTML = 'click there, look console 22'
	// btn.onclick= printMe
	// element.appendChild(btn)
	return element
}

// document.body.appendChild(component())
let element = component()
document.body.appendChild(element)
