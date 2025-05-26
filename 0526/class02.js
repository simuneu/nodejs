class Shape{
  constructor(width, height){
    this.width= width;
    this.height= height;
  }
  getArea(){
    console.log(`넓이는 ${this.width*this.height}`)
  }
  getDiagonal() {
    console.log(`대각선의 길이는  ${Math.floor(Math.sqrt(this.width ** 2 + this.height ** 2))}`);
  }
}

let rec1 = new Shape(3,4)
rec1.getArea();


class Rec2 extends Shape{
  constructor(width, height){
    super(width, height)
  }
}
const rec2 = new Rec2(5, 6)
rec2.getArea();
rec2.getDiagonal()


class Triangle extends Shape{
  constructor(width, height){
    super(width, height)
  }
  getArea() {
    console.log(`삼각형 넓이는 ${0.5 * this.width * this.height}`);
  }
}
const tri = new Triangle(7, 7)
tri.getArea()


class Circle extends Shape{
  constructor(radius){
    super(radius, radius)
    this.radius=radius;
  }
  getArea(){
    console.log(`원의 넓이는 ${Math.PI* this.radius**2}`)
  }
}
const cir = new Circle(5)
cir.getArea();

