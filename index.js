class Circle {
  constructor(radius) {
    this.radius = radius
    this.move = function () { }
  }
  draw() {
    console.log('Draw')
  }
}
const c = new Circle(10)