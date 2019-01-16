const _radius = new WeakMap()
const _movie = new WeakMap()

class Circle {
    constructor(radius) {
        _radius.set(this, radius)
        _movie.set(this, () => {
            console.log('move', this);
        })
    }
    draw() {
        // console.log(_radius.get(this))
        _movie.get(this)() //will be undifine
    }
}

//check any or not //it will not any
const c = new Circle(1)