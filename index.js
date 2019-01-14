function Stopwatch() {
    let startTime, endTime, running, duration = 0

    Object.defineProperty(this, 'duration', {
        get: function () { return duration },
        set: function (value) { duration = value }
    })
}
//This Is bad Idea
Stopwatch.prototype.start = function () {
    if (this.running)
        throw new Error('Sedang Berjalan')
    this.running = true
    this.startTime = new Date()
}
Stopwatch.prototype.stop = function () {
    if (!this.running)
        throw new Error('Sedang tidak Berjalan Berjalan')
    this.running = false
    this.endTime = new Date()
    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000
    this.duration += seconds
}
Stopwatch.prototype.reset = function () {
    this.startTime = null
    this.endTime = null
    this.running = false
    this.duration = 0
}