var express = require('express');
var router = express.Router();
const loginhandler  = require('../controller/user');
const { SuccessMedel, ErrorModel } = require('../model/resModel');

router.post('/login', function(req, res, next) {
  const { username, password } = req.body;
  const result = loginhandler(username, password);
  return result.then(data => {
    if(data.username) {
      req.session.username = data.username;
      req.session.realname = data.realname;

      res.json(
        new SuccessMedel()
      )
      return;
    }
    res.json(
      new ErrorModel('login error')
    )
  })
});

module.exports = router;
