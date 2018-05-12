/**
 *  /users* 라우터
 */

const express = require('express');
let router = express.Router();

// Users 모델 불러오기
const Users = require('../models/users');

// /users GET
router.get('/', (req, res, next) => {
  Users.find((err, result) => {
    if (err) {
      console.error(err);
      res.json({result: 0});
      return;
    }
    res.json(result);
  });
});

// Test Session
router.get('/test', (req, res, next) =>{
  sess = req.session;
  if (sess) {
    res.end(sess.name+","+sess.userid);
  }
});

// Logout(Session.destroy test)
router.get('/logout', (req, res, next) =>{
  if(!req.session.userid){
    res.end('로그인 되지않음');
  }else{
    req.session.destroy((err)=>{
      // session 제거
    });
    res.end('세션 제거 완료');
  }
});

// /users/login POST(body: userid,name,password) Login(Save Session)
router.post('/login', (req, res, next) =>{
  var sess;
  var id = req.body.userid;
  var name = req.body.name;
  var pw = req.body.password;

  Users.findOne({userid: id,password: pw},(err, user) => {
    if (err) {
      return res.status(500).json({status: 0});
    }
    if (!user) {
      return res.status(404).end('로그인 실패');
    }
    
  sess = req.session;
  sess.userid = id;
  sess.name = name;
  res.end('로그인성공');
  });
});

// /users POST (body: userid, name, password) Register
router.post('/', (req, res, next) => {
  var users = new Users();
  users.userid = req.body.userid;
  users.name = req.body.name;
  users.password = req.body.password;

  users.save((err) => {
    if (err) {
      console.error(err);
      res.json({result: 0});
      return;
    }
    res.json({result: 1});
  });
});

// /users/:userid GET 
router.get('/:userid', (req, res, next) => {
  Users.findOne({userid: req.params.userid}, (err, user) => {
    if (err) {
      return res.status(500).json({status: 0});
    }
    if (!user) {
      return res.status(404).json({status: 0});
    }
    res.json(user);
  });
});

// 라우터 내보내기
module.exports = router;
