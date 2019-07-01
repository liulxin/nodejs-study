const loginhandler = require('../controller/user');
const { SuccessMedel, ErrorModel } = require('../model/resModel');
const handleUserRouter = (req, res) => {
  const method = req.method;

  if (method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.body;
    const result = loginhandler(username, password);
    return result.then(data => {
      if(data.username) {
        return new SuccessMedel()
      };
      return new ErrorModel('登陆失败')
    })
  }
}

module.exports = handleUserRouter;