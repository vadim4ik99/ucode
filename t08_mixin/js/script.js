import {
    HouseBuilder
} from "./houseBuilder.js"


const houseMixin = {
    wordReplace(oldWord, newWord) {
        this.description = this.description
            .split(' ')
            .map((word) => word == oldWord ? newWord : word)
            .join(' ')

        return this
    },
    wordDelete(oldWord) {
        this.description = this.description
            .split(' ')
            .filter((word) => word != oldWord)
            .join(' ')

        return this
    },
    wordInsertAfter(targetWord, newWord) {
        const words = this.description
            .split(' ')

        words.splice(
            words.findIndex(word => word == targetWord) + 1,
            0,
            newWord
        )
        this.description = words.join(' ')

        return this
    },
    wordEncrypt() {
        const words = this.description
            .split(' ')

        this.description = words.map(word => {
            const characters = word.split('')

            return characters.map(character => {
                const unicode = character.charCodeAt(0)
                return  (
                    unicode > 1
                        ?
                            String.fromCharCode(unicode - 1) 
                        :
                            String.fromCharCode(unicode + 1)
                )
            }).join('')
        }).join(' ')
        return this
    },
    wordDecrypt() {
        const words = this.description
            .split(' ')

        this.description = words.map(word => {
            const characters = word.split('')

            return characters.map(character => {
                const unicode = character.charCodeAt(0)
                return (
                    unicode < 122 
                    ?
                        String.fromCharCode(unicode + 1) 
                    :
                        String.fromCharCode(unicode - 1)
                )
            }).join('')
        }).join(' ')
        return this
    }
}

const house = new HouseBuilder('88 Crescent Avenue', 'Spacious town house with wood flooring, 2-car garage, and a back patio.', 'J. Smith', 110, 5);

Object.assign(house, houseMixin);

console.log(house.getDaysToBuild());
// 220
console.log(house.description);
// Spacious town house with wood flooring, 2-car garage, and a back patio.

house.wordReplace("wood", "tile");
console.log(house.description);
// Spacious town house with tile flooring, 2-car garage, and a back patio.

house.wordDelete("town ");
console.log(house.description);
// Spacious house with tile flooring, 2-car garage, and a back patio.

house.wordInsertAfter("with", "marble");
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.

house.wordEncrypt();
console.log(house.description);
// Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.

house.wordDecrypt();
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio

((str) => {
    let a = ''
    for (let i = 0; i < str.length; i++) {
        a += ' ' + str.charCodeAt(i);
    }
    console.log(a)
})(house.wordEncrypt().description)