import style from './style.css'
import icon from './icon.jpg'
import createImg from './createImg'

// createImg()

const root = document.getElementById('root')
function component() {
	const img = new Image()
	img.src = icon
	img.classList.add(style.avator)
	return img
}
root.append(component())

