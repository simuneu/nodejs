const express = require('express');

const router = express.Router();
const controller = require('../controller') //index가 먼저 인식

router.get("/", controller.getMain);
router.post("/", controller.postMain);
router.get("/:id", controller.getId)

module.exports=router;