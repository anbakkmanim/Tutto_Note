var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dataSchema = new Schema({}, { collection: 'tuttonote' });

var userSchema = new Schema({
    userid: String ,
    name: String ,
    password: String ,

    // history: {
    //     title: String[],
    //     tag: String[],
    //     date: Date[],
    // },

    // user_icon: {
    //     path: String,
    //     name: String,
    // },
});

module.exports = mongoose.model('users', userSchema);