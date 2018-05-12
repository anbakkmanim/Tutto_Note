const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let noteSchema = new Schema({
    title: String,
    content: String,
    file: [{
        path: String,
        name: String
    }],
    status: Boolean,
    tags: [String],
    start_date: Date,
    end_date: Date,
    create_date: Date,
    modify_date: Date,
    popup: {
        x: Number,
        y: Number,
        width: Number,
        height: Number,
        is_opened: Boolean,
    },
});

module.exports = mongoose.model('note', noteSchema);