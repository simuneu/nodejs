const car = `{
  "model": "IONIQ 5",
  "company": "HYUNDAI",
  "price": 50000000,
  "year": 2023,
  "isElectricCar": true,
  "options": ["side mirror", "smart sensor", "built-in cam"]
}`;
console.log(car); // format: JSON

const obj = JSON.parse(car) //받은 데이터를 객체로 변환
console.log(obj) 
console.log(obj.model)
console.log(obj.price)

const json = JSON.stringify(obj) //다시 json형태로 돌리기
console.log(json, typeof json)
//json변수는 문자열이라서 접근이 안됨
console.log(json.model)
console.log(json.price)

