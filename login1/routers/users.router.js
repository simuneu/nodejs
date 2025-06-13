const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const authenticateToken = require('../middleware/authenticate-middleware.js')
const prisma  = require('../utils/prisma/index.js')
const {signUpValidation, handleValidationResult, loginValidator} = require('../middleware/validation-result-handler.js')


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
        return next(new Error("ExistValidation"))
      
      }
      //4번 디비 저장
      await prisma.users.create({
        data : {
          email,
          password, 
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