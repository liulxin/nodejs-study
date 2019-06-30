const loginhandler = require('../controller/user');
const { SuccessMedel, ErrorModel } = require('../model/resModel');
const handleUserRouter = (req, res) => {
  const method = req.method;

  if (method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.body;
    const result = loginhandler(username, password);
    if(result) {
      return new SuccessMedel()
    }else{
      return new ErrorModel()
    }
  }
}

module.exports = handleUserRouter;