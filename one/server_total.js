const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');

let user = {

};

/**
 * req
 * res
 */
http.createServer((req, res) => {
    let path = '', get = {}, post = {};
    if(req.method == 'GET'){
        let {pathname , query} = url.parse(req.url,true);

        path = pathname;
        get = query;

        complite();
    }else if(req.method == 'POST'){
        path = req.url;
        let arr = [];
        req.on('data', buffer => {
            arr.push(buffer)
        })
        req.on('end', () => {
            let buffer = Buffer.concat(arr);

            post = querystring.parse(buffer.toString())

            complite();
        })
    }


    function complite () {
        // console.log(path, get ,post)
        if(path == '/reg'){
            let {username,password} = get;
            if(user[username]){
                res.write(JSON.stringify({error: 1, msg: '此用户已经注册'}))
                res.end()
            }else{
                user[username] = password;
                res.write(JSON.stringify({error: 0, msg: '注册成功'}))
                res.end()
            }
        }else if(path == '/login'){
            let {username,password} = get;
            if(!user[username]){
                res.write(JSON.stringify({error: 1, msg: '此用户不存在'}))
                res.end()
            }else if(user[username] != password){
                res.write(JSON.stringify({error: 1, msg: '密码不正确'}))
                res.end()
            }else{
                res.write(JSON.stringify({error: 0, msg: '登陆成功'}))
                res.end()
            }
        }else{
            fs.readFile(`one/www${req.url}`,(err, buffer) => {
                if(err){
                    res.writeHeader(404);
                    res.write('not found');
                    res.end();
                }else{
                    res.write(buffer);
                    res.end();
                }
            })
        }
    }

}).listen(8080)
