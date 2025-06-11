const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const authenticateToken = require('../middleware/authenticate-middleware')

const SECRET_KEY = "seoul"

let sessionStore = {};

router.get("/set-session", (req, res)=>{
  console.log(req.session.users)
  if(!req.session.users){
    req.session.users=1;
  }else{
    req.session.users+=1;
  }
  res.send({
    "접속숫자":req.session.users
  })
  // const sessionId = Date.now().toString();
  // sessionStore[sessionId] ={
  //   isLoggedIn:true, 
  //   username:'guestUser'
  // }
  // return res.send(sessionId);
})

router.get("/set-cookie", (req, res)=>{
  res.cookie("login", "true");
  return res.send("cookie set");
})

router.get("/get-cookie",(req, res)=>{
  const cookies = req.cookies;
  return res.json({
    cookies
  })
})

router.get('/login', (req, res, next)=>{
  const user = {
    id:1, 
    username:"hong", 
    role:"user"
  }

  //비밀번호가 다르다는 조건
  // next(new Error("password!!!"));

  const token = jwt.sign(user, SECRET_KEY, {
    expiresIn:'3h'
  })
  console.log(token)
  return res.json({
    token
  })
})

router.get("/user", authenticateToken, (req, res, next)=>{
  console.log(req.user)
  // next(new Error("ExistEmail"));
})


module.exports = router;