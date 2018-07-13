const jwt = require('jsonwebtoken')

const tokenMiddleware = (req, res, next) => {

  // Token
  const token = req.headers['x-access-token']
  || req.headers.authorization.split(' ')[0] === "Bearer"
    ? req.headers.authorization.split(' ')[1]
    : req.query.token

  // If token was not found
  if (!token) {
    return res.status(403).json({
      status: 'ERR',
      message: 'token is not found'
    })
  }

  // Token verify
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

  // Logic
  tokenVerify
  .then(decToken => {
    req.decToken = decToken
    next()
  })
  .catch(onError)
}

module.exports = tokenMiddleware