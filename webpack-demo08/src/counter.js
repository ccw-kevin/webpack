function conuter() {
	const div = document.createElement('div')
	div.setAttribute('id', 'conuter')
	div.innerHTML = 1
	div.onclick = function() {
		div.innerHTML = parseInt(div.innerHTML, 10) + 1
	}
	document.body.appendChild(div)
}

export default conuter