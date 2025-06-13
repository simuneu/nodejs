const express = require("express");
const router = express.Router();
const SECRET_KEY = "seoul"
const jwt = require('jsonwebtoken');
const authenticateToken = require('../middleware/authenticate-middleware.js')
const prisma  = require('../utils/prisma/index.js')
const bcrypt = require("bcrypt")
const {signUpValidation, handleValidationResult, loginValidator} = require('../middleware/validation-result-handler.js')




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
  
  // 1. 이메일, 비번, 닉넴 입력 정확히 됐는지 검증
  // 2. 비밀번호 6글자 이상
  // 3. 이메일 중복불가 확인
  // 4. 데이터 베이스에 저장

 

  router.post('/sign-up',signUpValidation, handleValidationResult,async(req, res,next)=>{
    
    const {email, password, nickname}=req.body;

    //3번 검증
    try{
      const user = await prisma.users.findFirst({
        where:{email}
      })
       console.log(user)
      if(user){
        return next(new Error("ExistEmail"))
      }
      const saltRounds =10;
      const salt = await bcrypt.genSalt(saltRounds);
      console.log("salt: "+salt)
      const bcryptPassword = await bcrypt.hash(
        password,
        salt
      )
      console.log("bcryptPassword: "+bcryptPassword)

      //4번 디비 저장
      await prisma.users.create({
        data : {
          email,
          password :bcryptPassword, 
          nickname
        }
      })
      return res.status(201).json({
          msg:"회원 가입 완료"
        })
    }catch(e){

      return next(new Error("DataBaseError"));
    }
  })

// 로그인  api
// 1. 이메일 , 비번 입력 여부 확인
// 2. 이메일에 해당하는 사용자 찾기
// 3. 이메일 중복확인
// 4. 비번 일치여부확인
// 5. 토큰 발급
// 6. 생성된 데이터 전달 
router.post('/login', loginValidator, handleValidationResult, async (req, res, next)=>{
  const {email, password} = req.body;
  const user = await prisma.users.findFirst({
    where:{email}
  })
  if(!user){
    return next(new Error("UserNotFound"))
  }
  //비번검증
  const verifyPassword = await bcrypt.compare(password, user.password)
  console.log(verifyPassword)
  if(!verifyPassword){
    return (new Error ("PasswordError"))
  }
  const token  = jwt.sign({
    userId : user.userId
  }, SECRET_KEY, {
    expiresIn:"12h"
  })
  return res.status(200).send({
    token
  })
})

router.get("/user", authenticateToken, (req, res, next)=>{

})



module.exports = router;