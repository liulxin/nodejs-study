const crypto = reqyure('crypto');

const SECRET_KEY = 'adts_d123d';

function md5(content) {
  let md5 = crypto.createHash('md5');
  return md5.update(content).digest('hex')
}

function genPassword(password) {
  const str = `password=${password}&key=${SECRET_KEY}`；
  return md5(str)
}

module.exports = {
  genPassword
}