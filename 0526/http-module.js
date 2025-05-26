const http = require('http')
const server = http.createServer(function(req, res){
  res.writeHead(200);
  res.write("<h1>Hello!</h1>")
  res.end("<p>End</p>")
});

server.listen(8080, function(){
  console.log('8080번 포트로 서버 실행')
})

