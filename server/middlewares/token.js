const jwt = require('jsonwebtoken')

const tokenMiddleware = (req, res, next) => {
  const token = req.headers['x-access-token'] || req.query.token

  if (!token) {
    return res.status(403).json({
      status: 'ERR',
      message: 'token not found'
    })
  }

  const tokenVerify = new Promise((resv, rej) => {
    jwt.verify(token, req.app.get('secret'), (err, decToken) => {
      if (err) rej(err)
      resv(decToken)
    })
  })

  const onError = (err) => {
    res.status(403).json({
      status: 'ERR',
      message: err.message
    })
  }

  tokenVerify
  .then(decToken => {
    req.decToken = decToken
    next()
  })
  .catch(onError)
}

module.exports = tokenMiddleware