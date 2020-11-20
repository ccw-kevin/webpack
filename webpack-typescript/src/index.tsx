// const _ = require('lodash')
import * as _ from 'lodash' // 报错

class Show {
	greeting: string;
	constructor(message: string) {
		this.greeting = message
	}
	Greeting() {
		return _.join("11")
		// return _.join(['hello', this.greeting], " ")
		// return 'hello,' + this.greeting
	}
}

let show = new Show('PengGeng')
// alert(show.Greeting())
let button = document.createElement('button')
button.textContent = 'click me'
button.onclick = function() {
	alert(show.Greeting())
}

document.body.appendChild(button)