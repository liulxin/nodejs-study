const http = require('http');
const querystring = require('querystring');

// http://localhost:8000/
const server = http.createServer((req, res) => {
  console.log(req.method) // POST
  if(req.method === 'POST') {

    console.log('content-type',req.headers['content-type']); // application/json

    let postData = '';
    req.on('data', chunk => {
      postData += chunk.toString()
    })

    req.on('end', () => {
      console.log(postData);
      res.end('this is reqs')
      // res.end(postData)
    })
  }
})

server.listen(8000);