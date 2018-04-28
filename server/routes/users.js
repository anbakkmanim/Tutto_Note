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

router.get('/:userid', function(req, res, next){
  Users.findOne({userid: req.params.userid}, function(err, user)){
    if(err){
      return res.status(500).json({status: 0});
    }
    if(!book){
      return res.status(404).json({status: 0});
    }
    res.json(user);
  });
  // console.log(req.params._id);
  // if(req.params._id === '1234'){
  //   res.send({ status: 1, userid: 'AAAA', name: 'ㅁㄴㅇ'});
  // }else{
  //   res.send({ status: 0 });
  // }
});


module.exports = router;
