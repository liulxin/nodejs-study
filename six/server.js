const express = require('express');
const bodyp = require('body-parser');
const multer = require('multer');
const path = require('path');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

let server = express();
server.listen(8080);

server.use(cookieSession({
    keys: ['addss','aafe'],
    maxAge: 20 * 60 * 1000
}))
server.use(cookieParser(
    'qianmingqianming'
))

//解析
server.use(bodyp.urlencoded({
    extended: false
}));

let obj = multer({
    dest: path.resolve(__dirname,'./static/upload')
})
server.use(obj.any());//任何文件

server.get('/a', (req,res,next)=> {
    // console.log(req.cookies)
    // res.cookie('amou',98, {
    //     maxAge: 14 * 86400 * 1000 // 14天
    // })

    // console.log(req.cookies);//未签名的
    // console.log(req.signedCookies);//签名的
    // res.cookie('amou',99,{
    //     httpOnly: true, //只有服务器才能操作
    //     maxAge: 14 * 86400 * 1000 ,
    //     // secure: true, //https
    //     signed: true
    // })

    console.log(req.session)
    if(!req.session['view']){
        req.session['view'] = 1
    }else{
        req.session['view'] ++;
    }
    // res.send(req.query);
    res.send(`${req.session['view']}`)
});

server.post('/b', (req,res,next)=> {
    console.log(req.files);

    //

    res.send(req.body);
});

//静态资源  放在最后，进行捕获，接口优先文件
server.use(express.static(path.resolve(__dirname,'./static/')))