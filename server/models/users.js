/**
 *  MongoDB Users 모델
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 스키마 정의
let userSchema = new Schema({
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

// users 라는 이름으로 스키마 내보내기
module.exports = mongoose.model('users', userSchema);