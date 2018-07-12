/**
 *  기본 라우터 세팅
 */

const express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
  res.end('The quick fox jumps over the lazy brown dog.');
});

router.get('/sess', (req, res, next) => {
  // 모든 세션값을 json으로 넘겨줌
  res.status(200).json(req.session.user);
  res.end();
});

module.exports = router;
