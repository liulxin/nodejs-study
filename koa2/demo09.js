const koa = require('koa')
const views = require('koa-views')
const path = require('path')
const static = require('koa-static')
const app = new koa()

app.use(static(path.join(__dirname, './static')))
// http://localhost:3000/test.js

app.use(
	views(path.join(__dirname, './'), {
		extension: 'ejs'
	})
)

app.use(async ctx => {
	let title = 'hello ejs '
	await ctx.render('index', { title })
})

app.listen(3000, () => {
	console.log('app is running: http://localhost:3000')
})
