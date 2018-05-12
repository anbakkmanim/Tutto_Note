var express = require('express');
var router = express.Router();

router.get('/:_id', function(req, res, next){
  console.log(req.params._id);
  if(req.params._id === '1234'){
    res.send({ status: 1, userid: 'AAAA', name: 'ㅁㄴㅇ'});
  }else{
    res.send({ status: 0 });
  }
});

module.exports = router;
