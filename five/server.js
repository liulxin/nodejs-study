const http = require('http');
const path = require('path');
const zlib = require('zlib');
const url = require('url');
const fs = require('fs');

http.createServer((req,res) => {

    let {pathname} = url.parse(req.url,true);

    fs.stat(`five${pathname}`, (err, stat) => {
        if(err){
            // res.setHeader('content-encoding','deflate')
            res.writeHead(404);
            res.write('not found');
            res.end()
        }else{
            let rs = fs.createReadStream(`five${pathname}`);
            rs.on('error', err=> {
                console.log(err)
            })
            res.setHeader('content-encoding','gzip')
            let gz = zlib.createGzip();
            rs.pipe(gz).pipe(res)
            // rs.pipe(res)
        }
    })

}).listen(8080)