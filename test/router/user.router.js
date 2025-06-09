const express = require('express');
const { prisma } = require( "../utils/prisma/index.js")


const router = express.Router();

//새 유저 추가
router.post('/users', async(req, res)=>{

  const {email, password, nickname} = req.body

   try{
  //이메일 있는지 없는지 확인
  const existingUser= await prisma.users.findUnique({
    where:{email}
  })
    console.log(existingUser)
  //이메일 있으면 중복 안내
  // if(existingUser){
  //   return res.send({
  //     message:"중복 아이디 있음"
  //   })
  // }
  //이메일 없으면 추가
  // await prisma.users.create({
  //   data:{
  //     email, 
  //     password, 
  //     nickname
  //   }
  // })
  return res.send({
    message:"회원 가입 완료", 
  })
  }catch(e){
    console.log(e)
  }
})

module.exports =  router