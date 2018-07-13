const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  userid: String,
  name: String,
  password: String,
  // history: {
  //   title: [String],
  //   tag: [String],
  //   date: [Date]
  // },
  avatar: {
    path: {type: String, default: null},
    name: {type: String, default: null}
  }
})

// Create one User
User.statics.create = function(userid, name, password) {
  const user = new this({
    userid,
    name,
    password
  })

  return user.save()
}

// Find one User by userid
User.statics.findOneById = function(userid) {
  return this.findOne({
    userid
  })
  .exec()
}

// Find one User by _id
User.statics.findOneByUid = function(_id) {
  return this.findById(_id).exec()
}

User.statics.updateByUid = function(_id, user) {
  return this.update({_id}, {
    $set: user
  })
  .exec()
}

User.statics.deleteByUid = function(_id) {
  return this.deleteOne({_id})
  .exec()
}

// Password verify
User.methods.verify = function(password) {
  return this.password === password
}

module.exports = mongoose.model('User', User)