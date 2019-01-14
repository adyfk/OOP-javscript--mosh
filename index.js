function Circle(radius) {
    this.radius = radius

    let defaultLocation = { x: 0, y: 0 }
    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation
        },
        set: function (value) {
            if (!value.x || !value.y)
                throw new Error('Invalid Location')
            defaultLocation = value
        }
    })
}

const circle = new Circle(0.1)
circle.defaultLocation = { x: 10, y: 30 }
