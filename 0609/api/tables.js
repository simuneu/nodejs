const express = require('express')
const router = express.Router();

router.post("/", (req, res)=>{
   res.send({
    "message": "테이블 생성에 성공하였습니다."
  })
})


router.get("/", (req, res)=>{
  res.send({
    "tableList": [
      "rawQueryTable",
      "rawQueryTable1"
    ]
  })
})