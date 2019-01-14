function Circle(radius) {
    //instance Members
    this.radius = radius
}
Circle.prototype.draw = function () {
    //Prototype Members
    console.log('draw')
}   //No repeat always

const c1 = new Circle(1)

Circle.prototype.toString = function () {
    return 'Circle with Radius ' + this.radius
}

//Only Instance Member
console.log(Object.keys(c1))

//all member instace n prototype
for (let key in c1) console.log(key)

//Only Instace Property
console.log(c1.hasOwnProperty('draw'))