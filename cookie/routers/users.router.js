const express = require("express");
const router = express.Router();

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
module.exports = router;