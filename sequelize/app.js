const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

const db = require('./models')

async function testDbConnection() {
  try {
    await db.sequelize.authenticate();
    console.log('데이터베이스 연결 성공!');
  } catch (error) {
    console.error('데이터베이스 연결 실패:', error);
  }
}
testDbConnection();

app.post('/users', async (req, res) => {
 const { email, lastName, firstName } = req.body
console.log(email, lastName, firstName )

  const newUser = await db.User.create({
    firstName,
    lastName,
    email
  })
  return res.send({
    msg : " 새로운 유저를 넣었습니다."
  })
})
// app.post('/users', async (req, res) => {
//   console.log(req.body)
//   const { email, lastName, firstName } = req.body
//   console.log(email, lastName, firstName )

//   const newUser= await db.User.create({
//     firstName,
//     lastName, 
//     email,
//   })
//   return res.send({
//     msg:"add new user"
//   })

// })

app.listen(PORT, () => {
    console.log(`Start server!!! http://localhost:${PORT}`);
})