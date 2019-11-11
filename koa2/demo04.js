const koa = require('koa')
const fs = require('fs')
const app = new koa()

app.use(async ctx => {
	let { url } = ctx
	let html = await route(url)

	ctx.body = html
})

async function render(page) {
	return new Promise((resolve, reject) => {
		fs.readFile(page, 'binary', (err, data) => {
			if (err) {
				reject(err)
			} else {
				resolve(data)
			}
		})
	})
}

async function route(url) {
	let page = '404.html'
	switch (url) {
		case '/':
			page = 'index.html'
			break
		case '/index':
			page = 'index.html'
			break
		case '/todo':
			page = 'todo.html'
			break
		case '/404':
			page = '404.html'
			break
		default:
			break
	}
	let html = await render(page)
	return html
}

app.listen(3000, () => {
	console.log('app is running: http://localhost:3000')
})
