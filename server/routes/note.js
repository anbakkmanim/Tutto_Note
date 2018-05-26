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

router.get('/', (req, res, next) => {
    Note.find({author: req.session._id, enable : true},(err, notes) => {
        if (err) return res.status(500).res.json({result: 3});
        res.json(notes);
    }).sort({modify_date : -1});
});

router.put('/:_id', (req, res, next) => {
    Note.update({ _id: req.params._id }, { $set: req.body }, function(err, note){
        if(err) res.status(500).json({result : 3});
        if(!note) return res.status(404).json({result : 1});
        res.json({result : 0});
    })
});

router.delete('/delete/:_id', (req, res, next) => {
    if(remove(req.params._id) == 1){
        res.json({result : 3});
    }
    res.json({result : 0});
});

router.post('/delete', (req, res, next) => {
    let error = 0;
    let Errorarray = new Array();
    if(req.body._id.constructor === Array){
        for(let index = 0 ; index < req.body._id.length ; index ++ ){
            if(remove(req.body._id[index]) == 1){
                error++;
                Errorarray[Errorarray.length] = index;
            }
        }
    } else {
        if(remove(req.body._id) == 1){
            error++;
            Errorarray[Errorarray.length] = 0;
        }
    }
    res.json({result : error,Errorarray});
});

router.post('/', (req, res, next) =>{
    var notes = new Note();
    notes.author = req.session._id;
    notes.title = req.body.title;
    notes.content = req.body.content;
    notes.start_date = req.body.start_date;
    notes.end_date = req.body.end_date;

    if(req.body._id.constructor === Array){
        for (let index = 0; index < req.body.tags.length; index++) {
            notes.tags[index] = req.body.tags[index];
        }
    } else{
        notes.tags[0] = req.body.tags;
    }
    
    notes.save((err) => {
        if(err) res.status(500).json({result : 3});
        res.json({result : 0});
    });
});

module.exports = router;