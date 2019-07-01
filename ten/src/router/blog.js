const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog');
const { SuccessMedel, ErrorModel } = require('../model/resModel');

const handleBlogRouter = (req, res) => {
  const method = req.method;
  const id = req.query.id;

  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';
    // const listData = getList(author, keyword);
    // return new SuccessMedel(listData);
    const result = getList(author, keyword);
    return result.then(listData => {
      return new SuccessMedel(listData)
    })
  }

  if (method === 'GET' && req.path === '/api/blog/detail') {
    // const detailData = getDetail(id)
    // return new SuccessMedel(detailData);
    const result = getDetail(id);
    return result.then(data => {
      return new SuccessMedel(data)
    })
  }

  if (method === 'POST' && req.path === '/api/blog/new') {
    req.body.author = 'zhangsan';
    const blogData = req.body;
    // const data = newBlog(blogData);
    // return new SuccessMedel(data);
    const result = newBlog(blogData);
    return result.then(data => {
      return new SuccessMedel(data)
    })
  }

  if (method === 'POST' && req.path === '/api/blog/update') {
    const result = updateBlog(id, req.body);
    return result.then(val => {
      if(val) {
        return new SuccessMedel()
      }else{
        return new ErrorModel()
      }
    })
  }

  if (method === 'POST' && req.path === '/api/blog/del') {
    const author = 'zhangsan';
    const result = delBlog(id, author);
    return result.then(val => {
      if(val) {
        return new SuccessMedel()
      }else{
        return new ErrorModel('删除失败')
      }
    })
  }

}

module.exports = handleBlogRouter;