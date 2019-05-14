const Koa=require('koa');
const Router=require('koa-router');
const mysql=require('mysql');
const co=require('co-mysql');

let conn=mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'WXY901221',
  database: 'user_table'
});
let db=co(conn);

let server=new Koa();
server.listen(8080);

server.context.db= db;

let router=new Router();

router.get('/goods',async ctx => {
    let data = await ctx.db.query('SELECT * FROM goods')
    ctx.body = data;
})

server.use(router.routes());
