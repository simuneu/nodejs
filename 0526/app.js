// // import {add} from './math.js'
// import * as math from './math.js'

// console.log(math.add(4,5))
// console.log(math.pi)

const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs")
app.set("/views", express.static(__dirname+"/views"))
app.use("/public", express.static(__dirname+"/public"))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/test', (req, res) => {
  res.render('test')
})
app.get('/index', (req, res) => {
  res.render('index',{ title:"폼 실습"})
})
app.get('/getForm', function(req, res){
  console.log(req.query)
  
  res.render('result',{ 
    title:"get결과",
    userInfo:req.query
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
