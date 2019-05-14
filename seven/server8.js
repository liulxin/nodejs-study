const Koa=require('koa');
const Router=require('koa-router');
const static=require('koa-static');
const body=require('koa-better-body');
const path = require('path')

let server=new Koa();
server.listen(8080);

const router = new Router();

server.use(body({
  uploadDir: path.resolve(__dirname,'./static/upload')
}));

router.post('/upload',async ctx=>{
  //文件和post数据
  console.log(ctx.request.fields);

  ctx.body='aaa';
});

server.use(router.routes());
server.use(static(path.resolve(__dirname,'./static')));
