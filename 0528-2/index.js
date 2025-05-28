async function f1(){
  return 1
}
async function f2(){
  return Promise.resolve(1)
}

console.log("1>>", f1())

f1().then(function(result){
  console.log("2>>", result)
})

console.log("3>>", f2())

f2().then(function(result){
  console.log("4>>", result)
})

const f3 = async()=>{
  return 3;
}

console.log('----------------------------------------------------------------')
function fetchFruits(){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      const fruits = ['apple', 'orange', 'kiwi']
      resolve(fruits)
      reject(new Error('알 수 없는 에러 발생! 아이템을 가져올 수 없음'));
    },1000)
  })
}

//async await 방식
const temp=[]
async function printItems(){
  try {
    const fruits = await fetchFruits();
    console.log(fruits);
    return fruits;
  } catch (error) {
    console.log(error);
  }
}
printItems();

// fetchFruits()
//   .then(function(f){
//     console.log(f)
//     f.forEach(fruits=>{
//       temp.push(fruits)
//       console.log(temp)
//     })
//   })
//   .catch(function(error){
//     console.log(error)
//   })
