const http = require('http');
const querystring = require('querystring');

// http://localhost:8000/?q=1&a=2
const server = http.createServer((req, res) => {
  console.log(req.method) // GET

  const url = req.url;
  console.log(url); // /?q=1&a=2
  req.query = querystring.parse(url.split('?')[1]);
  res.end(JSON.stringify(req.query));
})

server.listen(8000);