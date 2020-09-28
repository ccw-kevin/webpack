import './style.css'
import counter from './counter'
import number from './number'

// function component() {
// 	// const element = document.createElement('div')
// 	const btn = document.createElement('button')
// 	document.body.appendChild(btn)
// 	btn.innerHTML = 'click me'
// 	btn.onclick = function() {
// 		let div = document.createElement('div')
// 		div.innerHTML = 'item'
// 		document.body.appendChild(div)
// 	}
// 	return btn
// }

// component()

// demo js HotModuleReplacement

counter()
number()

// 通过监听某一个模块的变化来达到模块的热更行
if(module.hot){
	module.hot.accept('./number', ()=> {
		document.body.removeChild(document.getElementById('number'))
		number()
	})
}