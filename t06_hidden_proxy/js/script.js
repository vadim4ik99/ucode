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

