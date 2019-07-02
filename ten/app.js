const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');
const querystring = require('querystring');

//post data
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if(req.method !== 'POST'){
      resolve({})
      return;
    }
    if(req.headers['content-type'] !== 'application/json'){
      resolve({})
      return;
    }
    let postData = '';
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end',() => {
      if(!postData) {
        resolve({})
        return
      }
      resolve(JSON.parse(postData))
    })
  });
  return promise; 
}

const serverHandler = (req, res) => {
  res.setHeader('Content-type', 'application/json');

  const url = req.url;
  req.path = url.split('?')[0];

  //解析 query
  req.query = querystring.parse(url.split('?')[1]);

  req.cookie = {};
  const cookieStr = req.headers.cookie || '';
  cookieStr.split(';').forEach(item => {
    if(!item) {
      return
    }
    req.cookie[item.split('=')[0].trim()] = item.split('=')[1].trim()
  });

  getPostData(req).then(postData => {
    req.body = postData;

    const blogResult = handleBlogRouter(req, res);
    const userResult = handleUserRouter(req, res);
    if (blogResult) {
      blogResult.then(blogData => {
        res.end(
          JSON.stringify(blogData)
        );
      })
      return;
    }
  
    if (userResult) {
      userResult.then(userData => {
        res.end(
          JSON.stringify(userData)
        )
      })
      return;
    }
      // 404
    res.writeHead(404, {'content-type': 'text/plain'})
    res.write('404 not found \n');
    res.end();
  })
}

module.exports = serverHandler;