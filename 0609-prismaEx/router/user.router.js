import express from "express"
import { prisma } from "../utils/prisma/index.cjs";

const router = express.Router();

//새 유저 추가
router.post('/users', async(req, res, next)=>{
  const {email, password, nickname} = req.body

  const newUser = await prisma.users.create({
    data:{
      email, 
      password, 
      nickname
    }
  })
  return res.send({
    message:"회원 가입 완료", 
    newUser
  })
})

export default router