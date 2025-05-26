class House{
  constructor(name, year){
    this.name=name;
    this.year=year;
  }
  age(){
    console.log(`건축한지 ${2025-this.year}년 됐어요`)
  }
}

class Apartment extends House{
  constructor(name, year){
    super(name, year)
  }
  getAge(){
    this.age();
  }
}

const test = new Apartment("현대", 2000)
test.getAge()