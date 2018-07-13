const jwt = require('jsonwebtoken')
const User = require('../../models/user')

// POST /auth/register
exports.register = (req, res) => {
  const { userid, name, password } = req.body

  const create = (user) => {
    if (user) {
      throw new Error('username exists')
    }
    else {
      return User.create(userid, name, password)
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

  User.findOneById(userid)
  .then(create)
  .then(respond)
  .catch(onError)
}

// POST /auth/login
exports.login = (req, res) => {
  const { userid, password } = req.body
  const secret = req.app.get('secret')

  const check = (user) => {
    if (!user) {
      throw new Error('user not found')
    }
    else {
      if (user.verify(password)) {
        const p = new Promise((resv, rej) => {
          jwt.sign(
            {
              user
            },
            secret,
            {
              expiresIn: '1h',
              issuer: 'tuttonote.anbakkmanim',
              subject: 'userInfo'
            },
            (err, token) => {
              if (err) rej(err)
              resv(token)
            }
          )
        })
        return p
      }
      else {
        throw new Error('login failed')
      }
    }
  }

  const respond = (token) => {
    res.status(200).json({
      status: 'SUC',
      token
    })
  }

  const onError = (err) => {
    res.status(403).json({
      status: 'ERR',
      message: err.message
    })
  }

  User.findOneById(userid)
  .then(check)
  .then(respond)
  .catch(onError)
}

// GET /auth/check
exports.check = (req, res) => {
  const token = req.decToken
  res.status(200).json({
    token
  })
}