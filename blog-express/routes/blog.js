var express = require('express');
var router = express.Router();
const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog');
const { SuccessMedel, ErrorModel } = require('../model/resModel');
const loginCheck = require('../middleware/loginCheck');

/* GET users listing. */
router.get('/list', function(req, res, next) {
  const author = req.query.author || '';
  const keyword = req.query.keyword || '';

  if(req.query.isadmin) {
    if(req.session.username == null) {
      res.json(
        new ErrorModel('未登录')
      )
      return;
    }
    author = req.session.username
  }

  const result = getList(author, keyword);
  return result.then(listData => {
     res.json(
      new SuccessMedel(listData)
     )
  })
});

router.get('/detail', function(req, res, next) {
  const result = getDetail(req.query.id);
  return result.then(data => {
     res.json(
      new SuccessMedel(data)
     )
  });
});

router.post('/new', loginCheck,  function(req, res, next) {
  req.body.author = req.session.username;
  const result = newBlog(req.body);
  return result.then(data => {
     res.json(
      new SuccessMedel(data)
     )
  });
});

router.post('/update', loginCheck,  function(req, res, next) {
  const result = updateBlog(req.query.id, req.body);
  return result.then(val => {
    if(val) {
      res.json(
        new SuccessMedel()
       )
    }else{
      res.json(
        new ErrorModel('未更新')
      )
    }

  });
});

router.post('/del', loginCheck, function(req, res, next) {
  const username = req.session.username;
  const result = delBlog(req.query.id , username);
  return result.then(val => {
    if(val) {
      res.json(
        new SuccessMedel()
       )
    }else{
      res.json(
        new ErrorModel('删除失败')
      )
    }
  })
})
module.exports = router;
