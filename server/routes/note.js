/**
 *  /note* 라우터
 */

const express = require('express');
let router = express.Router();

// Note 모델 불러오기
const Note = require('../models/note');

function remove(id) {
    Note.remove({_id : id, enable : false}, (err, note) => {
        if(err){
            return 1;
        }
    });
    return 0;
}

// /search/title/:title
router.get('/search/title', (req, res, next) => {
    let title = req.query.title;
    let author = req.query._id;
    Note.find( {title: { $regex: ".*"+title+".*" }, author: author, enable : true}, (err, notes) => {
        if(err) return res.status(404).json({result: 3});
        res.status(200).json(notes);
    });
});

router.get('/search/date/:_id', (req, res, next) => {
    var start = req.query.start;
    var end  = req.query.end;
    var created = req.query.created;

    console.log(start+"/"+end+"/"+created);
    if(!created){
        res.json({result : 1});
    }else{
        Note.find({create_date: created, enable : true}, (err, notes) => {
            if(err) return res.status(500).res.json({result: 3});
            res.json(notes);
        });
    }
});

// router.post('/search/tags', (req, res, next)=>{
//     let tags = req.body.tags;
//     let author = req.body._id;
    

// });

router.get('/author/:_id', (req, res, next) => {
    Note.find({author: req.params._id, enable: true}, (err, notes) => {
        if (err) return res.status(500).res.json({result: 3});
        res.json(notes);
    }).sort({modify_date : -1});
});

router.get('/author/trash/:_id', (req, res, next) => {
    Note.find({author: req.params._id, enable: false}, (err, notes) => {
        if (err) return res.status(500).res.json({result: 3});
        res.json(notes);
    }).sort({modify_date : -1});
});

router.get('/:_id', (req, res, next) => {
    Note.findOne({_id: req.params._id}, (err, note) => {
        if (err) return res.status(500).json({result: 3});
        res.json(note);
    });
});


router.put('/:_id', (req, res, next) => {
    Note.update({ _id: req.params._id }, { $set: req.body }, function(err, note){
        if(err) res.status(500).json({result : 3});
        if(!note) return res.status(404).json({result : 1});
        res.json({result : 0});
    })
});

// _id 배열 들어올 때 전부 데이터 변경
router.put('/update/array', (req, res, next) => {

    let arr = req.body.array;

    arr.forEach(el => {
        Note.update({ _id: el }, { $set: req.body }, function(err, note){
            if(err) res.status(500).json({result : 3});
            if(!note) return res.status(404).json({result : 1});
        })
    });
    res.status(200).json({result : 0});
});

router.delete('/delete/:_id', (req, res, next) => {
    if(remove(req.params._id) == 1){
        res.json({result : 3});
    }
    res.json({result : 0});
});

router.delete('/delete', (req, res, next) => {

    let arr = req.body.array;

    arr.forEach(el => {
        if(remove(req.body._id) == 1){
            res.status(404).json({result : 3});
        }
    });
    res.json({result : 0});
});

router.post('/', (req, res, next) =>{
    var notes = new Note();
    notes.author = req.body.author;
    notes.title = req.body.title;
    notes.content = req.body.content;
    notes.start_date = req.body.start_date;
    notes.end_date = req.body.end_date;
    notes.create_date = new Date().toString();
    notes.modify_date = new Date().toString();

    if(req.body.tags.constructor === Array){
        for (let index = 0; index < req.body.tags.length; index++) {
            notes.tags[index] = req.body.tags[index];
        }
    } else {
        notes.tags[0] = req.body.tags;
    }
    notes.save((err) => {
        if(err) res.status(500).json({result : 3});
        res.json({result : 0});
    });
});

module.exports = router;