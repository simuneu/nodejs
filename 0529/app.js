const express = require('express')

// const aRouter = require('./a')
// const aRouter = require('./a')
const gRouter = require('./api/goods')
const uRouter = require('./users')
const pRouter = require('./posts')
const app = express()
const port = 8080

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set("view engine", "ejs")
// app.set("views","/views")
const path = require('path')
app.set("views", path.join(__dirname, "views"))

app.use("/views", express.static(__dirname+"/views"))
app.use("/api", express.static(__dirname+"/api"))
app.use("/public", express.static(__dirname+"/public"))

// app.use("/a", aRouter)
app.use("/api/goods", gRouter)
app.use("/users", uRouter)
app.use("/posts", pRouter)

app.get("/api/goods", (req, res)=>{
  res.send()
})

app.post("/api/goods", (req, res)=>{
  res.send()
})
app.get("/api/goods/:id", (req, res)=>{
  res.send()
})
app.put("/api/goods/:id", (req, res)=>{
  res.send()
})
app.delete("/api/goods/:id", (req, res)=>{
  res.send()
})

//2
app.get("/users", (req, res)=>{
  res.send()
})
app.post("/users/:id", (req, res)=>{
  res.send({
    "id": 6
  })
})
app.get("/users/:id", (req, res)=>{
  res.send()
})
app.delete("/users/:id", (req, res)=>{
  res.send()
})
app.get("/users/:id/posts", (req, res)=>{
  res.send()
})


//3
app.get("/posts", (req, res)=>{
  res.send()
})
app.get("/posts/:id", (req, res)=>{
  res.send()
})

app.post("/posts", (req, res)=>{
  res.send()
})
app.put("/posts/:id", (req, res)=>{
  res.send()
})
app.delete("/posts/:id", (req, res)=>{
  res.send()
})

// app.get("/", (req, res)=>{
//   res.send("!!!")
// })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})