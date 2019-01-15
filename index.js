function Shape(color) {
    this.color = color
}
Shape.prototype.duplicate = function () {
    console.log('duplicate')
}
function Circle(radius, color) {
    // Shape(color)     //window.color
    Shape.call(this, color)

    this.tadius = radius
}
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle
const c = new Circle(10, 'red')