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

// /users POST (body: userid, name, password)
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
