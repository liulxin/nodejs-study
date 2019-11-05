const http = require('http')

http
	.createServer((req, res) => {
		console.log(`收到了请求，请求路径：${req.url}`)
		console.log(`请求我的客户端地址是：${req.socket.remoteAddress}, ${req.socket.remotePort}`)
		let url = req.url
		console.log(url)
		// res.writeHead(200, { 'Conten-Type': 'text/html;charset=utf-8' })
		res.setHeader('Conten-Type', 'text/html;charset=utf-8')

		if (url === '/') {
			res.write('<h1>this is h1</h1>')
		} else if (url === '/login') {
			res.write('<span>login</span>')
		} else {
			res.write('404')
		}
		res.end()
	})
	.listen(8000)

console.log(`server running at http://localhost:8000`)
