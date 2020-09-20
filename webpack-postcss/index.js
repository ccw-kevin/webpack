import './style.css'
const root = document.getElementById('root')
function component() {
	let El = document.createElement('div')
	El.classList.add('hello')
	El.innerText = 'hahha'
	return El
}
root.append(component())
// document.body.appendChild()

