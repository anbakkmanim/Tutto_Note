/**
 *  Tutto Note node.js Backend Server
 */

// 모듈 불러오기
const express = require('express');
const session = require('express-session');
const createError = require('http-errors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// 원격지 관련 기본 세팅
const mongo_dest = 'mongodb://115.68.24.158:27017/tuttonote';

// 라우터 정의
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let noteRouter = require('./routes/note');
let app = express();


// MongoDB 연결
let db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
  console.log('MongoDB 서버에 연결되었습니다.');
});
mongoose.connect(mongo_dest);

// 앱 세팅
app.use(logger('dev'));

app.use(cookieParser());
app.use(session({
  secret: '#@Xg3fd21&%v',
  resave: false,
  saveUninitialized: true
 }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/note', noteRouter);

// 정의되지 않은 접속에 404 보내기
app.use((req, res, next) => {
  next(createError(404));
});

// 에러 핸들러
app.use((err, req, res, next) => {
  // 개발 모드일 시 로그에 에러 메시지 출력
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // 에러 응답 보내기
  res.status(err.status || 500);
});

// 앱 내보내기
module.exports = app;