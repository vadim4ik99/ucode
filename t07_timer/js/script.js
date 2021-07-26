
class Timer {
    constructor(title, delay, stopCount) {
        this.title = title
        this.delay = delay
        this.cyclesLeft = this.stopCount = stopCount
    }
    start() {
        this.interval = setInterval(() => this.tick(), this.delay)
        console.log(`Timer ${this.title} started delay=${this.delay}, stopCount=${this.stopCount}`);
    }
    tick() {
        this.cyclesLeft--
        console.log(`Timer ${this.title} Tick | cycles left ${this.cyclesLeft}`)
        this.cyclesLeft == 0 && this.stop()
        return this
    }
    stop() {
        clearInterval(this.interval)
        console.log(`Timer ${this.title} stopped`);
    }
}

const runTimer = (id, delay, counter) => new Timer(id, delay, counter).start()

runTimer('Bleep', 1000, 5)