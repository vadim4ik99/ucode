module.exports = {
    checkDivision: function(beginRange = 1, endRange = 60) {
        for (i = beginRange; i <= endRange; i++) {
            let output = ''
            i % 2 == 0 && (output += ' is divisible by 2,')
            i % 3 == 0 && (output += ' is divisible by 3,')
            i % 10 == 0 && (output += ' is divisible by 10')
            output == '' && (output = ' -')
            output[output.length - 1] == ',' && (output = output.slice(0, -1))
            console.log('The number ' + i + output)
        }
    }
}
