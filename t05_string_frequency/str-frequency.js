module.exports = class StrFrequency {
    constructor(str) {
        this.str = str
    }

    letterFrequencies() {
        return this.str.toLowerCase().split('').reduce((res, char) => {
            if (char.match(/[a-z]/i)) return (res[char] = (res[char] || 0) + 1, res)
            return res
        }, {})
    }

    wordFrequencies() {
        return this.str.toUpperCase().split(' ').reduce((res, word) => {
            word = word.split('').map(char => char.match(/[a-z]/i) ? char : '').join('')

            if (word) return (res[word] = (res[word] || 0) + 1, res)
            return res
        }, {})
    }

    reverseString() {
        this.str = this.str.split('').reverse().join('')
        return this.str
    }
}