var express = require('express');
var Users = require('../models/users');
var router = express.Router();

router.get('/', function(req, res, next) {
  Users.find(function(err, userlist){
    if(err){
      console.error(err);
      res.json({result : 0});
      return;
    }
    res.json(userlist);
  });
});

router.post('/', function(req, res){
  var users = new Users();
  users.userid = req.query.userid;
  users.name = req.query.name;
  users.password = req.query.password;

  users.save(function(err){
    if(err){
      console.error(err);
      res.json({result: 0});
      return;
    }
    res.json({result: 1});
  });

});


module.exports = router;
