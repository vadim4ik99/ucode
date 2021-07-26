class Human {
    constructor() {
        setInterval(() => {
            if (this.calories > 0) {
                this.calories -= 10
            }
        }, 1000)
    }
    firstName = 'king'
    lastName = 'ofUniverse'
    gender = 'male'
    age = '10^10 light years'
    calories = 200
    mouse = '.mouse'
    shout(phrase) {
        let mouse = document.querySelector(this.mouse)
        mouse.innerHTML = phrase
        setTimeout(() => {
            if (mouse.innerHTML == phrase) {
                mouse.innerHTML = ''
            }
        }, 10000)
    }
    sleepFor(time) {
        this.shout("Z-z-z")
        setTimeout(() => this.shout("I'm awake"), time)
        return this
    }
    feed() {
        if (this.calories < 500) {
            this.shout("Nom-nom-nom")
            this.calories += 200
        } else {
            this.shout("I'm not hungry")
        }
    }
}

class SuperHero extends Human {
    constructor() {
        super()
        this.shout('This I swear')
    }
    code() {
        this.shout('alert("Hello world")')
        alert("Hello world!")
    }
    fightEvil() {
        this.shout("**drops out of university**")
    }
}

human = new Human()
document.querySelector('.gender').innerHTML = 'gender:......................... ' + human.gender
document.querySelector('.age').innerHTML = 'age:.......... ' + human.age
document.querySelector('.first').innerHTML = 'First name:................... ' + human.firstName
document.querySelector('.last').innerHTML = 'Last name:......... ' + human.lastName

document.querySelector('#sleep').addEventListener('click', () => human.sleepFor(5000))
document.querySelector('#feed').addEventListener('click', () => human.feed())
document.querySelector('#code').addEventListener('click', () => human.code())
document.querySelector('#fight').addEventListener('click', () => human.fightEvil())

document.querySelector('#fight').style.display = 'none'
document.querySelector('#code').style.display = 'none'

const becomeHero = document.querySelector('#become-hero')

becomeHero.addEventListener('click', () => {
    human = new SuperHero()
    document.querySelector('#fight').style.display = 'block'
    document.querySelector('#code').style.display = 'block'
    document.querySelector('img').src = 'https://www.wonderwall.com/wp-content/uploads/sites/2/2018/02/1020851-supergirl_1984_helen_slater_02.jpg?h=800'
})

setInterval(() => document.querySelector('.calories').innerHTML = 'calories:. . . . . . . . . . . . .  ' + human.calories, 100)

setInterval(() => {
    if (human.calories >= 500) {
        becomeHero.style.display = 'block'
    } else {
        becomeHero.style.display = 'none'
    }
}, 100);

