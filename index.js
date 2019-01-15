function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}
function Shape() { }
Shape.prototype.duplicate = function () {
  console.log("Duplicate Shape");
};

function Circle() { }
extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  console.log("Duplicate Circle");
};

function Square() { }
extend(Square, Shape);

Square.prototype.duplicate = function () {
  console.log("Duplicate Square");
};

const Shapes = [
  new Circle(),
  new Square()
]

// for (let Shape of Shapes) {
//   if (Shape.type === 'Circle')
//     duplicateCircle()
//   else if (Shape.type === 'Square')
//     duplicateSquare()
//   else
//     duplicateShape()
// }

for (let Shape of Shapes) {
  Shape.duplicate() //This is Polymorphism
} 
