function* generator() {
    let sum = 1
    while (true) {
        sum > 10000 && (sum = 1)
        let value = parseInt(yield sum)
        if (!isNaN(value)) {
            sum += value
        } else {
            alert('Invalid тгьиук')
            console.log('Invalid тгьиук')}
    }
}

const gen = generator()
let previous = 1

while (true) {
    previous = gen.next(prompt(`Previous result: ${previous}. Enter a new number:`)).value
}
