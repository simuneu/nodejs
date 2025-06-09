const express = require('express')
const router = express.Router();



router.post("/:id", (req, res)=>{
   res.send({
    "message": "데이터 생성에 성공하였습니다."
  })
})

router.get("/:id", (req, res)=>{
  res.send({
    "itemList": [
      {
        "id": 1,
        "name": "Hello",
        "createdAt": "2024-01-01T04:17:57.000Z"
      },
      {
        "id": 2,
        "name": "Hello",
        "createdAt": "2024-01-01T04:17:57.000Z"
      },
      {
        "id": 3,
        "name": "Hello",
        "createdAt": "2024-01-01T04:17:58.000Z"
      }
    ]
  })
})