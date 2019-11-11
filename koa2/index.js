const koa = require('koa')
const app = new koa()

app.use(async ctx => {
	ctx.body = 'hello koa'
})

app.listen(3000, () => {
  console.log('app is running at: http://localhost:3000')
})
