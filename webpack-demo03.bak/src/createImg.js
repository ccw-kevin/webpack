import Icon from './icon.jpg'
function createImg() {
	let element = document.createElement('div')
	
	const myIcon = new Image()
	myIcon.src = Icon
	// imgEl.appendChild(myIcon)
	element.appendChild(myIcon)
	myIcon.classList.add('avator')

	document.body.appendChild(element)
}

export default createImg

