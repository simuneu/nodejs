const express = require("express");
const userRouter = require("./routers/users.router");
const cookieParser = require("cookie-parser");
const errHandlingMiddleware = require("./middleware/error-handling-middleware")
// var session = require('express-session');
// var FileStore = require('session-file-store')(session);
// const jwt = require('jsonwebtoken')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// app.use(cookieParser());
// app.use(session({
//     resave : false,
//     cookie : {
//       httpOnly: true
//     },
//     saveUninitialized : true,
//     store: new FileStore(),
//     secret: 'keyboard cat'
// }));
app.use("/", [userRouter])

app.use(errHandlingMiddleware)

app.listen(PORT, () => {
    console.log(`Start server!!! http://localhost:${PORT}`);
})