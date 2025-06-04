const express = require('express');
const indexRouter = require("./routes/index");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use("/", indexRouter)

app.listen(port, ()=>{
  console.log(`http://localhost${port}`);
});