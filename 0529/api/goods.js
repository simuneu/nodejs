const express = require('express')
const router = express.Router();

router.get("/", (req, res)=>{
  res.send({
    goods: [
      {
      "goodsId": 1,
      "goodName": "상품 1",
      "category": "drink",
      "price": 1000
      },
    ]
  })
})

router.post("/", (req, res)=>{
   res.send({
    "goods": [{
    "goodsId": 1,
    "goodName": "상품 1",
    "category": "drink",
    "price": 1000
    },
    {
    "goodsId": 2,
    "goodName": "상품 2",
    "category": "drink",
    "price": 3000
    },
  ]})
})
router.get("/:id", (req, res)=>{
  const id = req.params
  console.log(id)
    res.send({
    "goodsId": 1,
    "goodName": "상품 1",
    "category": "drink",
    "price": 1000
  })
})
router.put("/:id", (req, res)=>{
  res.send({
    "goods": [{
    "goodsId": 1,
    "goodName": "상품 1",
    "category": "drink",
    "price": 1000
    },
    {
    "goodsId": 2,
    "goodName": "상품 2",
    "category": "drink",
    "price": 5000
    },
  ]})
})
router.delete("/:id", (req, res)=>{
    res.send(	{
    "goods": [{
    "goodsId": 1,
    "goodName": "상품 1",
    "category": "drink",
    "price": 1000
    }
  ]})
})
module.exports=router