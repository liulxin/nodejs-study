const Koa=require('koa');
const Router=require('koa-router');

let server=new Koa();
server.listen(8080);

let router=new Router();


router.get('/login', async ctx=>{
  /*
  ctx.assert(ctx.query.user, 400, 'username is required');
  ctx.assert(ctx.query.pass, 400, 'password is required');
  */

  if(ctx.query.user && ctx.query.pass){
    ctx.body='成功';
  }
});

server.use(router.routes());
