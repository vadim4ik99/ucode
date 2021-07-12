const checkBrackets = (str) => {
    if (typeof str == 'string' && (str.includes('(') || str.includes(')'))) {
        let opened = 0,
            unopened = 0
        str.split('').forEach(item => {
            if (item == ')') {
                if (opened == 0) { unopened += 1 }
                else { opened -= 1 }
            }

            if (item == '(') opened += 1
        });
        return (opened + unopened)
    } else return -1

}

console.log(checkBrackets('fjfj90()'))
console.log(checkBrackets(123))
console.log(checkBrackets('df()())))(((()))('))
console.log(checkBrackets(`const checkBrackets = (str) => {if (typeof str == 'string' && (str.includes('(') || str.includes(')'))) {let opened = 0,unopened = 0str.split('').forEach(item => {if (item == ')') {if (opened == 0) { unopened += 1 }else { opened -= 1 }}if (item == '(') opened += 1});return (opened + unopened) } else return -1}`))
console.log(checkBrackets(new Date(23456787654)))
console.log(checkBrackets('abc'))
console.log(checkBrackets('()1212   (('))
console.log(checkBrackets('(()()()()))())((())()))))((()()()()))())'))
console.log(checkBrackets('(123)'))
console.log(checkBrackets('""""~~~~~~~~~$%^()&*()%^*^ \n()'))
console.log(checkBrackets('()'))
console.log(checkBrackets('()'))
console.log(checkBrackets({}))

