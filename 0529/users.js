const express = require('express');
const router = express.Router();

// const users=require("./user")
const users = [1,2,3,4,5];

router.get("/", (req, res)=>{
  const temp = [];
  users.forEach((el) => {
    temp.push({ id: el });
  });
  res.send(temp);
})

router.post("/:id", (req, res)=>{
  const id = req.body.id
  console.log("받은id"+id)
  const exists = users.includes(id)

  if(!exists){
    users.push(id)
      res.send({
        "id": id,
        "message":"추가되었습니다."
    })
  }else{
    res.send({
      "error":"이미존재합니다."
    })
  }
})

router.get("/:id", (req, res)=>{
  res.send({
    "id": 2
    }
    ,
    {
    "error": "해당 사용자를 찾을 수 없습니다."
  })
})
router.delete("/:id", (req, res)=>{
  const id = Number(req.params.id);
  console.log("삭제 요청된 id : "+id)
  const index = users.indexOf(id);
  if(index !== -1){
    users.splice(index, 1)
    res.send({
    "message": "사용자가 삭제되었습니다.",
    "deletedId":id
    })
  }else{
    res.send({
      "error":"에러"
    })
  }
})
router.get("/:id/posts", (req, res)=>{
	res.send([{
		"id": 1,
		"userId": 2,
		"title": "두 번째 글",
		"content": "REST API 관계형 실습입니다.",
		"createdAt": "2024-05-29T10:00:00Z"
		},
		{
		"id": 3,
		"userId": 2,
		"title": "새로운 글",
		"content": "Express + MongoDB 테스트입니다.",
		"createdAt": "2024-05-29T13:30:00Z"
		}],
		{
		"error": "해당 사용자를 찾을 수 없습니다."
	})
})

module.exports = router