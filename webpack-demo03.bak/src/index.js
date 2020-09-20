import _ from 'lodash'
import style from './style.css'
import Icon from './icon.jpg'

// import createImg from './createImg'

// createImg()

function component() {
	let element = document.createElement('div')
	// element.style.position = 'relative'
	// // element.style.height = '400px'
	// // element.style.width = '400px'
	// element.innerHTML = _.join(['hello', 'webpack'], ' ')
	// element.classList.add('hello')

	// 添加图片
	// let imgEl = document.createElement('div')
	// imgEl.style.height = '400px'
	// imgEl.style.width = '400px'
	const myIcon = new Image()
	myIcon.src = Icon
	// imgEl.appendChild(myIcon)
	element.appendChild(myIcon)
	myIcon.classList.add(style.avator)

	return element
}

document.body.appendChild(component())