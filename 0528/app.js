const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req, res)=>{
  res.redirect('/index')
})

app.get('/index', (req, res) => {
  res.render('index')
})

app.get('/getForm',(req, res)=>{
  console.log(req.query)

  res.render("result", {
    title:"Get결과",
    userInfo:req.query, 
  })
})

app.post("/postForm", (req, res)=>{
 res.render("result", {
    title:"post결과",
    userInfo:req.body, 
  })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

