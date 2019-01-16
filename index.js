const _radius = Symbol()
const _draw = Symbol()

class Circle {
    constructor(radius) {
        this[_radius] = radius
    }
    [_draw]() {

    }
}

//check any or not //it will not any
const c = new Circle(10)
console.log('This is C', c)
console.log(c)
console.log(Object.getOwnPropertySymbols(c))