const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog');
const { SuccessMedel, ErrorModel } = require('../model/resModel');

const handleBlogRouter = (req, res) => {
  const method = req.method;
  const id = req.query.id;

  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';
    const listData = getList(author, keyword);

    return new SuccessMedel(listData);
  }

  if (method === 'GET' && req.path === '/api/blog/detail') {
    const detailData = getDetail(id)
    return new SuccessMedel(detailData);
  }

  if (method === 'POST' && req.path === '/api/blog/new') {
    const blogData = req.body;
    const data = newBlog(blogData);
    return new SuccessMedel(data);
  }

  if (method === 'POST' && req.path === '/api/blog/update') {
    const result = updateBlog(id, req.body);
    if(result) {
      return new SuccessMedel()
    }else{
      return new ErrorModel()
    }
  }

  if (method === 'POST' && req.path === '/api/blog/del') {
    const result = delBlog(id);
    if(result) {
      return new SuccessMedel()
    }else{
      return new ErrorModel()
    }
  }

}

module.exports = handleBlogRouter;