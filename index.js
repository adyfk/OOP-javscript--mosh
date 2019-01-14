function Circle(radius) {
    //instance Members
    this.radius = radius
}
Circle.prototype.draw = function () {
    //Prototype Members
    console.log('draw')
}   //No repeat always

const c1 = new Circle(1)
const c2 = new Circle(2)

Circle.prototype.toString = function () {
    return 'Circle with Radius ' + this.radius
}
