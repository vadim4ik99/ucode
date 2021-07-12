(greet = () => {
    const firstName = prompt('Enter first name')
    const lastName = prompt('Enter last name')
    let message
    if (firstName && lastName && isNaN(firstName) && isNaN(lastName)) {
        message = `Hello, ${firstName} ${lastName}`
    } else {
        message = 'Wrong input!'
    }
    alert(message)
    console.log(message)
})()



