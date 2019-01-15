function Shape() {

}
Shape.prototype.duplicate = function () {
    console.log('duplicate')
}
function Circle(radius) {
    this.tadius = radius
}
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle
const c = new Circle(10)