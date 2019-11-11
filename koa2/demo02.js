const koa = require('koa')
const app = new koa()

app.use(async ctx => {
	let { url, method } = ctx

	if (ctx.url === '/' && ctx.method === 'GET') {
		let html = `
		<h1>koa2</h1>
		<form method="POST" action="/">
			<input name="username" placeholder="usernmae"/>
			<input name="age" placeholder="age"/>
			<button type="submit">submit</button>
		</form>
		`
		ctx.body = html
	} else if (ctx.url === '/' && ctx.method === 'POST') {
		let postData = await parsePostData(ctx)
		ctx.body = postData
	} else {
		ctx.body = '<h1>404！</h1>'
	}
})

function parsePostData(ctx) {
	return new Promise((resolve, reject) => {
		try {
			let postData = ''
			ctx.req.addListener('data', data => {
				postData += data
			})
			ctx.req.on('end', () => {
				let parseData = parseQueryStr(postData)
				resolve(parseData)
			})
		} catch (err) {
			reject(err)
		}
	})
}

function parseQueryStr(queryStr) {
	let queryData = {}
	let queryStrList = queryStr.split('&')
	queryStrList.forEach(querys => {
		let [key, value] = querys.split('=')
		queryData[key] = decodeURIComponent(value)
	})
	return queryData
}

app.listen(3000, () => {
	console.log('app is running at: http://localhost:3000')
})
