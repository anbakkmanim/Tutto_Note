/**
 *  /note* 라우터
 */

const express = require('express');
let router = express.Router();

// Note 모델 불러오기
const Note = require('../models/note');

router.get('/', (req, res, next) => {
    Note.find((err, result) => {
        if (err) {
          console.error(err);
          res.json({result: 0});
          return;
        }
        res.json(result);
    });
});

router.post('/', (req, res, next) =>{
    var notes = new Note();
    notes.title = req.body.title;
    notes.content = req.body.content;
    notes.start_date = req.body.start_date;
    notes.end_date = req.body.end_date;

    for (let index = 0; index < req.body.tags.length; index++) {
        notes.tags[index] = req.body.tags[index];
    }
    
    notes.save((err) => {
        if (err) {
          console.error(err);
          res.json({result: 0});
          return;
        }
        res.json({result: 1});
    });
});

module.exports = router;