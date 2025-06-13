module.exports = function(err, req, res, next){
  console.log(err.message)
  switch(err.message){
    case "PasswordValidation":
    case "InputValidation": return res.status(400).send({
      errorMessage: "입력된 요청이 잘못되었습니다. "
    })
    break;
    case "ExistValidation":
    case "ExistEmail" : return res.status(400).send({
      errorMessage : "가입된 이메일이 있습니다."
    })
    break;
    case "UserNotFound" : return res.status(404).send({
      errorMessage : "해당 유저가 없습니다."
    })
    break;
    case "PasswordError" : return res.status(401).send({
      errorMessage : "패스워드 일치하지 않습니다."
    })
    break;
    case "DataBaseError": return res.status(500).send({
      errorMessage:"DB 오류 발생"
    })
    break;
    case "password" : return  res.status(400).send({
      errorMessage:"패스워드 불일치"
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
    default : return res.status(500).send({
      errorMessage:"서버 오류 발생"
    })
  }
}