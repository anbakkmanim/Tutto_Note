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

router.post('/', function(req, res, next){
  var users = new Users();
  users.userid = req.body.userid;
  users.name = req.body.name;
  users.password = req.body.password;

  users.save(function(err){
    if(err){
      console.error(err);
      res.json({result: 0});
      return;
    }
    res.json({result: 1});
  });
});

router.get('/:userid', function(req, res, next){
  Users.findOne({userid: req.params.userid}, function(err, user){
    if(err){
      return res.status(500).json({status: 0});
    }
    if(!user){
      return res.status(404).json({status: 0});
    }
    res.json(user);
  });
});


module.exports = router;
