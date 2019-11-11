const koa = require('koa')
const app = new koa()

app.use(async ctx => {
	if (ctx.url === '/index') {
		ctx.cookies.set('kname', 'koa', {
      // domain: 'localhost',
			// path: '/index',
			maxAge: 1000 * 60 * 60,
			expires: new Date('2019-11-12'),
			httpOnly: true,
			overwrite: false
		})
		ctx.body = 'hello cookie!!!'
	} else {
		if (ctx.cookies.get('kname')) {
			ctx.body = ctx.cookies.get('kname')
		}
	}
})

app.listen(3000, () => {
	console.log('app is running: http://localhost:3000')
})
