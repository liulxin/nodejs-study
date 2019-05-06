const http = require('http');
// const querystring = require('querystring');
const url = require('url');

let server = http.createServer((req,res) => {
    // let [url,query] = req.url.split('?');
    // let get = querystring.parse(query);
    // console.log(url,get)

    // let result = url.parse(req.url);
    // console.log(result)

    // let result = url.parse(req.url, true);//true 查询模块分析查询字符串
    let {pathname, query} = url.parse(req.url, true);
    // console.log(result)
    console.log(pathname, query)
});

server.listen(8080)
