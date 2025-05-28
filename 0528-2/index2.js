let product;
let price;

function goMart(){
  console.log('마트에 가서 뭘 살지 고민 중...')
}

function pickDrink(){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log("고민끝")
      product='제로콜라'
      price=2000
      resolve()
      // reject()
    },3000)
  })
}

function pay(){
  console.log(`상품명:${product} , 가격:${price}`)
}
function noPay(){
  console.log('금액 부족..')
}

async function exec(){
  goMart()
  try{
    await pickDrink();
    pay();
  }catch(err){
    noPay();
  }
}

exec();
