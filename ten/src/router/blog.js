const { getList } = require('../controller/blog');
const { SuccessMedel, ErrorModel } = require('../model/resModel');

const handleBlogRouter = (req, res) => {
  const method = req.method;

  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';
    const listData = getList(author, keyword);

    return new SuccessMedel(listData);
  }

  if (method === 'GET' && req.path === '/api/blog/detail') {
    return {
      msg: '获取blogdetail的接口'
    }
  }

  if (method === 'POST' && req.path === '/api/blog/new') {
    return {
      msg: 'new blog接口'
    }
  }

  if (method === 'POST' && req.path === '/api/blog/update') {
    return {
      msg: 'update blog接口'
    }
  }

  if (method === 'POST' && req.path === '/api/blog/del') {
    return {
      msg: 'del blog接口'
    }
  }

}

module.exports = handleBlogRouter;