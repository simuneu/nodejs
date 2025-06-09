import express from "express"// const express = require('express');
import userRouter from "./router/user.router.js"

const PORT = 4000;
const app = express();
app.use(express.json())
app.use('/', userRouter);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});