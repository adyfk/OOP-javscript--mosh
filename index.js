class Shape {
    move() {
        console.log('Shape Move')
    }
}
class Circle extends Shape {
    move() {
        super.move()
        console.log('Circle Move')
    }
}

const c = new Circle('red', 10)
console.log(c)