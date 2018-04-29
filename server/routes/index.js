/**
 *  기본 라우터 세팅
 */

const express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
  console.log('The quick fox jumps over the lazy brown dog.');
});

module.exports = router;
