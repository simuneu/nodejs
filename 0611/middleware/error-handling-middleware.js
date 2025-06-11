module.exports = function(err, req, res, next){
  console.log(err.message)
  switch(err.message){
    case "password" : return  res.status(400).send({
      errorMessage:"패스워드 불일치"
    })
    break;
    case "ExistEmail" : return res.status(400).send({
      errorMessage : "가입된 이메일이 있습니다."
    })
    break;
    case "Forbidden":return res.status(401).send({
      errorMessage:"접근 권한이 없습니다."
    })
    case 'UserNotFound':
    case 'Need login':
    case 'accessTokenNotMatched':
      return res.status(401).send({
        errorMessage:'로그인을 해주세요',
      })
  }
}