function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}
function Shape(color) {
  this.color = color;
}
Shape.prototype.duplicate = function() {
  console.log("duplicate");
};

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}
extend(Circle, Shape); //Jikaextend setelah create prototype , will be replace
Circle.prototype.draw = function() {
  console.log("draw");
};

function Square(size) {
  this.size = size;
}
extend(Square, Shape);

const c = new Circle(10, "red");
const s = new Square(12);
