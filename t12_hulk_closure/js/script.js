const concat = (str1, str2) => {
    let count = 0
    return (function (str1,str2) {
        if (!str2) {
            return func1 = () => {
                str2 = prompt('Enter Second String')
                count++
                this.func1.count = count
                return concat(str1, str2)
            }
        } 
        return (str1 + str2)
    })(str1, str2, count)
    
}



console.log(concat('I,', 'Robot'))

let phrase = concat('Where is my ')
let output = phrase()
console.log(output)
output = phrase()
console.log(output)
console.log(phrase.count)

