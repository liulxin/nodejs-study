var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser'); //解析cookie
var logger = require('morgan'); //日志
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const fs = require('fs');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var userRouter = require('./routes/user');
var blogRouter = require('./routes/blog');

var app = express();

// view engine setup 视图设置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//logs
const logfilename = path.join(__dirname, 'logs', 'access.log');
const writestream = fs.createWriteStream(logfilename, {
  flags: 'a'
});
app.use(logger('dev', {
  stream: writestream
}));

app.use(express.json()); //post解析json格式 application/json ，挂载req.body上
app.use(express.urlencoded({ extended: false })); // 解析 x-ww-form-urlencoded ， 挂载req.body上
app.use(cookieParser()); //cookie解析
// app.use(express.static(path.join(__dirname, 'public'))); // 静态资源

const redisClient = require('./db/redis');
const sessionStore = new RedisStore({
  client: redisClient
});
app.use(session({
  secret: 'atdbaudokdks_23',
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  },
  store: sessionStore
}))
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/user', userRouter);
app.use('/blog', blogRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
