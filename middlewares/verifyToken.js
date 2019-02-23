const jwt = require('jsonwebtoken')

// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    jwt.verify(bearerToken, `${process.env.JWT_SECRET}`, (err, payload) => {
      if (err) {
        res.sendStatus(403)
      }
      req.user = payload
      next();
    })
    // Next middleware
  } else {
    // Forbidden
    res.sendStatus(403);
  }

}

module.exports = verifyToken