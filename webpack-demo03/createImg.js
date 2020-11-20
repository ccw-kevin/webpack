import icon from './icon.jpg'

function createImg() {
	const root = document.getElementById('root')
	const img = new Image()
	img.src = icon
	// img.width = 200
	// img.height = 200
	img.classList.add('avator')
	root.append(img)
}

export default createImg