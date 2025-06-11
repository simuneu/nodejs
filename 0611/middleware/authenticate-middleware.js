const jwt = require('jsonwebtoken');
const SECRET_KEY = "seoul"

module.exports = function (req, res, next){
  const authHeader = req.headers['authorization'];
  const token = authHeader &&authHeader.split(' ')[1];
  req.password ="1234"

  if(req.password !== "1234"){
    return next(new Error("password"));
  }
  const verifiedToken = verifyToken(token);

  if(!verifiedToken){
    return next(new Error("Need login"))
  }
  req.user = verifiedToken;
  next();
}

function verifyToken(token){
  try{
    return jwt.verify(token, SECRET_KEY)
  }catch(e){
    return false;
  }
}