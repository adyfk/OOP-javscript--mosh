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
  Shape.prototype.duplicate.call(this)
  console.log("Duplicate Circle");
};

const c = new Circle();
