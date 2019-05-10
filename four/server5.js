const http=require('http');
const mysql=require('mysql');
const co=require('co-mysql');
const url=require('url');
const fs=require('fs');
const validator=require('./validator');

//1.连接到服务器
let con = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'WXY901221',
    database: 'user_table'
});
let db = co(con);

//2.跟http配合
http.createServer( async (req, res)=>{
  const {pathname, query}=url.parse(req.url, true);
  if(pathname=='/reg'){
    //0.参数是否正确
    let {username, password}=query;
    let err=validator.username(query.username);
    if(err){
      res.write(err);
    }else{
      let err=validator.password(query.password);
      if(err){
        res.write(err);
      }else{
      //1.检查用户名是不是用过
      try{
        let data=await db.query(`SELECT ID FROM user WHERE username='${username}'`);
        if(data.length>0){
          res.write('此用户名已被占用');
        }else{
          await db.query(`INSERT INTO user (username, password) VALUES('${username}', '${password}')`);
          res.write('注册成功');
        }
      }catch(e){
        res.write('数据库有错');
      }
      res.end();
    }
  }
  }else if(pathname=='/login'){
    //1.检查用户是否存在
    //2.密码对不对
    //3.返回
    let {username, password}=query;
    let err=validator.username(query.username);
    if(err){
      res.write(err);
    }else{
      let err=validator.password(query.password);
      if(err){
        res.write(err);
      }else{
        try{
          let data=await db.query(`SELECT id,password FROM user WHERE username='${username}'`);
          console.log(data)
          if(data.length==0){
            res.write('用户名不存在');
          }else if(data[0].password!=password){
            res.write('密码不对');
          }else{
            res.write('成功');
          }
        }catch(e){
          res.write('数据库出错');
          console.log(e);
        }
      }
    }
    res.end();
  }else{
    fs.readFile('four/www'+pathname, (err, buffer)=>{
      if(err){
        res.writeHeader(404);
        res.write('not found');
      }else{
        res.write(buffer);
      }
      res.end();
    });
  }
}).listen(8080);
