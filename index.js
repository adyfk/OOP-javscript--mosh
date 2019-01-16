const _radius = new WeakMap()

class Circle {
    constructor(radius) {
        _radius.set(this, radius)
    }
    get radius() {
        return _radius.get(this)
    }
    set radius(value) {
        if (value <= 0) throw new Error('Invalid Value')
        _radius.set(this, value)
    }

}

//check any or not //it will not any
const c = new Circle(1)
console.log(c.radius)
console.log('Isi', c.radius = 10)
console.log('Isi min', c.radius = -1)   