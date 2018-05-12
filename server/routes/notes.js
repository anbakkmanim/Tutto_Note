const express = require('express');
let router = express.Router();

const Notes = require('../models/notes');

router.post('/', (req, res, next) => {
    sess = req.session;
    Notes.find({userid = sess.userid},(err, result) => {
        if (err) {
          console.error(err);
          res.json({result: 0});
          return;
        }
        res.json(result);
    });
});