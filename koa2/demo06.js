const koa = require('koa')
const Router = require('koa-router')
const app = new koa()

// home
const home = new Router()
home
	.get('/about', ctx => {
		ctx.body = 'home / about'
	})
	.get('/todo', ctx => {
		ctx.body = 'home / todo'
	})

// page
const page = new Router()
page
	.get('/about', ctx => {
		ctx.body = 'page / about'
	})
	.get('/todo', ctx => {
		ctx.body = 'page / todo'
	})

// root
const router = new Router()
router.use('/home', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

app.use(router.routes())

app.listen(3000, () => {
	console.log('app is running: http://localhost:3000')
})
