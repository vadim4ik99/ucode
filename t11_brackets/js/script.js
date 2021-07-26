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

console.log(checkBrackets())