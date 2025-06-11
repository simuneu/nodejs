const express = require('express');
const userRouter = require("./routers/users.router");
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT||3000;

app.use(express.json())
app.use(cookieParser())
app.use("/", [userRouter])

app.listen(PORT, () => {
    console.log(`Start server!!! http://localhost:${PORT}`);
})