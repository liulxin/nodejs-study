const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=> {
  // console.log(res)
  const {url, method, headers} = req;
  if(url === '/' && method === 'GET') {
    fs.readFile('index.html', (err, data) => {
      if(err) {
        res.writeHead(500, {'Content-Type':'text/plain;charset=utf-8'})
        res.end('Server Error 服务器错误')
      }
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end(data)
    })
  }else if(url === '/users' && method === 'GET'){
    res.writeHead(200,{'Content-Type':'text/json;charset=utf-8'})
    res.end(JSON.stringify({'name': 'ig加油'}))
  }else if(url === '/' && headers.accept.indexOf('image/*') !== -1 ){
    console.log(headers)
    fs.createReadStream('.'+url).pipe(res)
  }
  // res.end('end........')
})

server.listen(3000, ()=> {
  console.log('listen 3000 port')
})