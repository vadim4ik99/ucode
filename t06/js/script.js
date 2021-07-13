
(greet = () => {
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
    const firstName = prompt('Enter first name').capitalize()
    const lastName = prompt('Enter last name').capitalize()
    let message
    if (firstName && lastName && isNaN(firstName) && isNaN(lastName)) {
        message = `Hello, ${firstName.capitalize()} ${lastName.capitalize()}`
    } else {
        message = 'Wrong input!'
    }
    alert(message)
    console.log(message)
})()



