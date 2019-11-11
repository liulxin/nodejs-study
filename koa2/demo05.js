const koa = require('koa')
const Router = require('koa-router')
const app = new koa()

// const router = new Router({
// 	prefix: '/koa'
// })

const router = new Router()

router
	.get('/', (ctx, next) => {
		ctx.body = 'hello koa'
	})
	.get('/todo', (ctx, next) => {
		ctx.body = 'hello todo'
	})

app.use(router.routes())

app.listen(3000, () => {
	console.log('app is running: http://localhost:3000')
})
