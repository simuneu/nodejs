const express = require("express");
const router = express.Router();
const prisma = require('../utils/prisma/index.js');
const authenticateToken = require('../middleware/authenticate-middleware.js')


//게시글 생성
router.post('/posts',authenticateToken, async(req, res, next)=>{
  try{
    const{title, content} = req.body;
    const userId= req.user;
    const newPost = await prisma.post.create({
      data:{
        userId,
        title, 
        content
      },
    });
    return res.status(201).json({message:'게시물 등록되었습니다.', data:newPost})
  }catch(e){
    next(error);
  }
})

//게시글 전체 조회
router.get('/posts', async(req, res, next)=>{
  const posts = await prisma.post.findMany({
    include:{
      User :{
        select:{
          userId:true,
          nickname:true
        }
      }
    },
    orderBy:{
      createdAt:"desc"
    }
  })
  res.send({
    data:posts
  })
})


//특정 게시글 조회
router.get('/posts/:postId', async (req, res, next)=>{
  const {postId} = req.params; //구조분해할당
  const post = await prisma.post.findUnique({
    where: { postId: +postId}, //자동 숫자 형변환
    include: {
      User: {
        select:{
          userId:true, 
          nickname:true
        }
      }
    }
  })
  return res.status(200).json({data:post})
});


//게시글 수정
router.put('/posts/:postId', async(req, res, next)=>{
  const {postId} = req.params; //구조분해할당
  const {title, content} = req.body;

  const updatePost = await prisma.post.update({
    where:{ postId:+postId},
    data:{
      title,
      content
    }
  })
  return res.status(200).json({
    message:'게시글이 수정되었습니다.',
    data:updatePost
  })
})


//게시글 삭제
router.delete('/posts/:postId', async(req, res, next)=>{
  const {postId} = req.params; //구조분해할당
  await prisma.post.delete({
    where:{postId:+postId}
  })
  return res.status(200).json({
  message:'게시글이 삭제되었습니다.',
  })
});

module.exports = router;