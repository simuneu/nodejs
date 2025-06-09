const express = require('express');
const userRouter = require("./router/user.router.js")

const PORT = 4000;
const app = express();
app.use(express.json())
app.use('/', userRouter);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});