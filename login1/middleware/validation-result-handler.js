const {body, validationResult} = require('express-validator')

exports.signUpValidation =[
  body('email')
    .isEmail().withMessage('이메일 형식이 아닙니다.')
    .notEmpty().withMessage('이메일이 없습니다.'),
    body('password')
      .isLength({min:6}).withMessage('비밀번호가 6자리 이하')
      .notEmpty().withMessage('비번 비었습니다.'),
     body('nickname')
      .notEmpty().withMessage('닉네임이 비었습니다.')
]
exports.loginValidator=[]

exports.handleValidationResult = (req, res, next)=>{
  const result = validationResult(req).errors;
  if (result.length !== 0) {
    // 입력 오류가 있는 경우
    const extractError = result.map(err => err.msg)
    // console(extractError)
    return next(new Error("InputValidation"));
  }
  next();
}