const http = require('http');

let arrowOrigin = {
    'http://localhost': true,
    'http://aaa.com': true,
    // 'http://127.0.0.1:8081': true
}
http.createServer((req, res) => {

    console.log(req.headers)

    let {origin} = req.headers;

    console.log(origin)

    if(arrowOrigin[origin]) {
        res.setHeader('access-control-allow-origin','*')
    }


    res.write(JSON.stringify({a:1,b:"blue"}));
    res.end()

}).listen(8080)