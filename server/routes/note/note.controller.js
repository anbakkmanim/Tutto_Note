const Note = require('../../models/note')
const fs = require('fs')

// POST /note
exports.create = (req, res) => {
  const {
    title,
    content,
    tags,
    start_date,
    end_date,
    color
  } = req.body
  const token = req.decToken
  const author = token.user._id

  const create = () => {
    return Note.create(title, content, author, tags, start_date, end_date, color)
  }

  const respond = () => {
    res.status(200).json({
      status: 'SUC',
    })
  }

  const onError = (err) => {
    res.status(409).json({
      status: 'ERR',
      message: err.message
    })
  }

  create()
  .then(respond)
  .catch(onError)
}

// GET /note
exports.getAll = (req, res) => {
  const token = req.decToken

  const respond = (notes) => {
    if(!notes){
      res.status(404).json({
        status: 'ERR',
        message: 'Empty notes'
      })
      return;
    }
    res.status(200).json({
      notes
    })

  }

  const onError = (err) => {
    res.status(403).json({
      status: 'ERR',
      message: err.message
    })
  }

  Note.findAll(token.user._id)
  .then(respond)
  .catch(onError)
}

// GET /note/:_id
exports.getOne = (req, res) => {
  const respond = (note) => {
    if(!note){
      res.status(404).json({
        status: 'ERR',
        message: 'Empty note'
      })
      return;
    }
    res.status(200).json({
      note
    })
  }

  const onError = (err) => {
    res.status(403).json({
      status: 'ERR',
      message: err.message
    })
  }

  Note.findOneByUid(req.params._id)
  .then(respond)
  .catch(onError)
}

// GET /note/get/trash
exports.getTrash = (req, res) => {
  const token = req.decToken

  const respond = (notes) => {
    if(!notes){
      res.status(404).json({
        status: 'ERR',
        message: 'Empty notes'
      })
      return;
    }
    res.status(200).json({
      notes
    })
  }

  const onError = (err) => {
    res.status(403).json({
      status: 'ERR',
      message: err.message
    })
  }

  Note.findInTrash(token.user._id)
  .then(respond)
  .catch(onError)
}

// PUT /note/:_id
exports.update = (req, res) => {
  const note = req.body
  const noteUid = req.params._id

  const update = (recvNote) => {
    if (!recvNote) {
      throw new Error('note not found')
    }
    else {
      return Note.updateByUid(noteUid, note)
    }
  }

  const respond = () => {
    res.status(200).json({
      status: 'SUC',
    })
  }
  
  const onError = (err) => {
    res.status(409).json({
      status: 'ERR',
      message: err.message
    })
  }

  Note.findOneByUid(noteUid)
  .then(update)
  .then(respond)
  .catch(onError)
}

// DELETE /note/:_id
exports.delete = (req, res) => {
  const noteUid = req.params._id

  const remove = (recvNote) => {
    if (!recvNote) {
      throw new Error('note not found')
    }
    else {
      if(recvNote.file)
        fs.unlink(file.path)
      return Note.deleteByUid(noteUid)
    }
  }

  const respond = () => {
    res.status(200).json({
      status: 'SUC',
    })
  }

  const onError = (err) => {
    res.status(409).json({
      status: 'ERR',
      message: err.message
    })
  }

  Note.findOneByUid(noteUid)
  .then(remove)
  .then(respond)
  .catch(onError)
}

// GET /note/search/title
exports.searchTitle = (req, res) => {
  const token = req.decToken

  const respond = (notes) => {
    if(!notes){
      res.status(404).json({
        status: 'ERR',
        message: 'Empty notes'
      })
      return;
    }
    res.status(200).json({
      notes
    })
  }

  const onError = (err) => {
    res.status(403).json({
      status: 'ERR',
      message: err.message
    })
  }

  Note.findByTitle(token.user._id, req.query.title)
  .then(respond)
  .catch(onError)
}

// GET /note/search/date
exports.searchDate = (req, res) => {
  const token = req.decToken

  const respond = (notes) => {
    if(!notes){
      res.status(404).json({
        status: 'ERR',
        message: 'Empty notes'
      })
      return;
    }
    res.status(200).json({
      notes
    })
  }

  const onError = (err) => {
    res.status(403).json({
      status: 'ERR',
      message: err.message
    })
  }

  Note.findByDate(token.user._id, req.query.date)
  .then(respond)
  .catch(onError)
}

// GET /note/search/tags
exports.searchTags = (req, res) => {
  const token = req.decToken

  const respond = (notes) => {
    if(!notes){
      res.status(404).json({
        status: 'ERR',
        message: 'Empty notes'
      })
      return;
    }
    res.status(200).json({
      notes
    })
  }

  const onError = (err) => {
    res.status(403).json({
      status: 'ERR',
      message: err.message
    })
  }

  Note.findByTags(token.user._id, req.query.tags)
  .then(respond)
  .catch(onError)
}

// POST /note/:_id/attach
exports.attach = (req, res) => {
  const noteUid = req.params._id
  const files = req.files
  let document = new Array()

  files.forEach(el => {
    document.push({
      path: el.path,
      name: el.originalname
    })
  })
  const update = (recvNote) => {
    if (!recvNote) {
      throw new Error('note not found')
    }
    else {
      console.log(1)
      return Note.updateByUid(noteUid, {
        file: document
      })
    }
  }

  const respond = () => {
    res.status(200).json({
      status: 'SUC'
    })
  }

  const onError = (err) => {
    res.status(403).json({
      status: 'ERR',
      message: err.message
    })
  }

  Note.findOneByUid(noteUid)
  .then(update)
  .then(respond)
  .catch(onError)
}

// DELETE /note/:_id/cascade
exports.cascade = (req, res) => {
  const deleteAll = (notes) => {
    notes.forEach(el => {
      if(el.file)
        fs.unlinkSync(el.path)
      Note.deleteByUid(el._id)
    })
  }

  const respond = () => {
    res.status(200).json({
      status: 'SUC'
    })
  }

  const onError = (err) => {
    res.status(403).json({
      status: 'ERR',
      message: err.message
    })
  }

  Note.findAll(req.params._id)
  .then(deleteAll)
  .then(respond)
  .catch(onError)
}