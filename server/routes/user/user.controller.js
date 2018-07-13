const User = require('../../models/user')
const fs = require('fs')

exports.update = (req, res) => {
  const user = req.body
  const userUid = req.params._id

  const update = (recvUser) => {
    if (!recvUser) {
      throw new Error('note not found')
    }
    else {
      return User.updateByUid(userUid, user)
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

  User.findOneByUid(userUid)
  .then(update)
  .then(respond)
  .catch(onError)
}

exports.delete = (req, res) => {
  const userUid = req.params._id

  const remove = (recvUser) => {
    if (!recvUser) {
      throw new Error('note not found')
    }
    else {
      return User.deleteByUid(userUid)
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

  User.findOneByUid(userUid)
  .then(remove)
  .then(respond)
  .catch(onError)
}

exports.upload = (req, res) => {
  const userUid = req.params._id
  const mime = ["image/png", "image/jpeg", "image/jpg"]

  if (mime.includes(req.file.mimetype) !== true) {
    fs.unlinkSync(req.file.path)
    res.status(403).json({
      status: 'ERR',
      message: 'file mime mismatched'
    })
    throw new Error('mime type mismatched')
  }

  const update = (recvUser) => {
    if (!recvUser) {
      throw new Error('note not found')
    }
    else {
      return User.updateByUid(userUid, {
        avatar: {
          path: req.file.path,
          name: req.file.originalname
        }
      })
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

  User.findOneByUid(userUid)
  .then(update)
  .then(respond)
  .catch(onError)
}