const checkDivision = (beginRange, endRange) => {
    for (i = beginRange; i <= endRange; i++) {
        let output = ''
        i%2 == 0 && (output += ' even,')
        i%3 == 0 && (output += ' is a multiple of 3,')
        i%10 == 0 && (output += 'is a multiple of 10')
        output == '' && (output = '-')
        output[output.length - 1] == ',' && (output = output.slice(0, -1))
        console.log(i+output)
    }
}
const beginRange = prompt('beginRange')
const endRange = prompt('endRange')

console.log(checkDivision(beginRange, endRange))