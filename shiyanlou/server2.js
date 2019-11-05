const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on('request', (req, res) => {
	const url = req.url
	console.log(url)

	if (url === '/') {
		res.setHeader('Conten-Type', 'text/plain')

		fs.readFile('./index.html', (err, data) => {
			if (err) {
				res.end('文件读取失败')
			} else {
				res.writeHead(200, {
					'Content-Type': 'text/html;charset=UTF-8'
				})
				res.end(data.toString())
			}
		})
	} else if (url === '/register') {
		fs.readFile('./register.html', (err, data) => {
			if (err) {
				res.end('文件读取失败')
			} else {
				res.writeHead(200, {
					'Content-Type': 'text/html;charset=UTF-8'
				})
				res.end(data.toString())
			}
		})
	} else {
		res.end('<h1>404 Not Found.</h1>')
	}
})

server.listen(8000, () => {
	console.log('server running at http://localhost:8000')
})
