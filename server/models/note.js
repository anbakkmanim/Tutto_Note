const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let noteSchema = new Schema({
    title: String,
    content: String,
    file: [{
        path: String,
        original_name: String
    }],
    author: {type: Schema.Types.ObjectId, ref: 'users'},
    enable: {type: Boolean, default: true},
    tags: [String],
    start_date: Date,
    end_date: Date,
    create_date: {type: Date, default: Date.now},
    modify_date: {type: Date, default: Date.now},
    popup: {
        x: {type: Number, default: 0},
        y: {type: Number, default: 0},  
        width: {type: Number, default: 200},
        height: {type: Number, default: 200},
        is_opened: {type: Boolean, default: false},
    },
});

module.exports = mongoose.model('note', noteSchema);