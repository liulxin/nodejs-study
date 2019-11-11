const koa = require('koa')

const app = new koa()

app.use(async ctx => {
	let { request, response, url } = ctx

	// 从 request 中获取请求
	// let { query, querystring } = request

	// 从 ctx 中获取请求
  let { query, querystring } = ctx
  
	ctx.body = {
		url,
		query,
		querystring
	}
})

app.listen(3000, () => {
	console.log('app is running at: http://localhost:3000')
})
