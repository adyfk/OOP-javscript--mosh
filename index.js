class Shape {
    constructor(color) {
        this.color = color
    }
    move() {
        console.log('Move')
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color)
        this.radius = radius
    }
    draw() {
        console.log('draw')
        this.move()
    }
}

const c = new Circle('red', 10)
console.log(c.draw())