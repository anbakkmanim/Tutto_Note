const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Note = new Schema({
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
  create_date: Date,
  modify_date: Date,
  popup: {
    x: {type: Number, default: 0},
    y: {type: Number, default: 0},
    width: {type: Number, default: 200},
    height: {type: Number, default: 200},
    is_opened: {type: Boolean, default: false}
  }
})

Note.statics.create = function(title, content, author, tags, start_date, end_date) {
  const note = new this({
    title,
    content,
    author,
    tags,
    start_date,
    end_date
  })

  return note.save()
}

Note.statics.updateByUid = function(_id, note) {
  return this.update({_id}, {
    $set: note
  })
  .exec()
}

Note.statics.deleteByUid = function(_id) {
  return this.deleteOne({_id})
  .exec()
}

Note.statics.findOneByUid = function(_id) {
  return this.findById(_id).exec()
}

Note.statics.findAll = function(author) {
  return this.find({
    author,
    enable: true
  })
  .sort({modify_date: -1})
  .exec()
}

Note.statics.findInTrash = function(author) {
  return this.find({
    author,
    enable: false
  })
  .sort({modify_date: -1})
  .exec()
}

Note.statics.findByTitle = function(author, title) {
  return this.find({
    author,
    title,
    enable: true
  })
  .sort({modify_date: -1})
  .exec()
}

Note.statics.findByDate = function(author, date) {
  return this.find({
    author,
    $and: [
      {
        start_date: {
          "$lte": date
        },
        end_date: {
          "$gte": date
        }
      }
    ],
    enable: true
  })
  .sort({modify_date: -1})
  .exec()
}

Note.statics.findByTags = function(author, tags) {
  return this.find({
    author,
    tags: {$all: tags},
    enable: true
  })
  .sort({modify_date: -1})
  .exec()
}

module.exports = mongoose.model('Note', Note)