console.log('hello, this is Peng Geng')

if('serviceWorker' in navigator) {
	window.addEventListener('load', function(){
		navigator.serviceWorker.register('/service-worker.js')
			.then( registration => {
					console.log('serviece-worker registed')
			}).catch( error => {
					console.log('service-worker reigster error')
			})
	})
}