export const validator = {
    get: function(target, property, value) {
        console.log(`Trying to access property '${property}'...`);
        return (
            property in target
                ?
                    target[property]
                :
                    false
        )
            
    },

    set: function(target, property, value) {
        if (property == 'age') {
            if (isNaN(value)) throw new TypeError('The age is not integer')
            if (value > 200 || value < 0) throw new RangeError('The age is invalid')
        }
        console.log(`Setting value '${property}' to '${value}'`);
        target[property] = value
        return true
    }
}

let person = new Proxy({}, validator);

person.age = 100;
// Setting value '100' to 'age'
console.log(person.age);
// Trying to access the property 'age'...
// 100
person.gender = "male";
// Setting value 'male' to 'gender'
person.age = 'young';
// Uncaught TypeError: The age is not an integer
person.age = 300;
// Uncaught RangeError: The age is invalid

