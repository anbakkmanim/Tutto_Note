const Note = require('../../models/note')

exports.create = (req, res) => {
  const {
    title,
    content,
    tags,
    start_date,
    end_date
  } = req.body
  const token = req.decToken
  const author = token.user._id

  const create = () => {
    return Note.create(title, content, author, tags, start_date, end_date)
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

exports.getAll = (req, res) => {
  const token = req.decToken

  const respond = (notes) => {
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

exports.getOne = (req, res) => {
  const respond = (note) => {
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

  Note.findOneByUid(req._id)
  .then(respond)
  .catch(onError)
}

exports.getTrash = (req, res) => {
  const token = req.decToken

  const respond = (notes) => {
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

exports.delete = (req, res) => {
  const noteUid = req.params._id

  const remove = (recvNote) => {
    if (!recvNote) {
      throw new Error('note not found')
    }
    else {
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

exports.searchTitle = (req, res) => {
  const token = req.decToken

  const respond = (notes) => {
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

exports.searchDate = (req, res) => {
  const token = req.decToken

  const respond = (notes) => {
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

exports.searchTags = (req, res) => {
  const token = req.decToken

  const respond = (notes) => {
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