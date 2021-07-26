let data = [
    {
        name:'Black Panther',
        age:53,
        strength:66,
    },
    {
        name:'Capitan America',
        age:137,
        strength:79,
    },
    {
        name:'Capitan Marvel',
        age:26,
        strength:97,
    },
    {
        name:'Hulk',
        age:49,
        strength:80,
    },
    {
        name:'Iron Man',
        age:48,
        strength:88,
    },
]

const sort = {
    type: 'strength',
    isDesc: true
}

const table = document.createElement('table')
table.append(document.createElement('tbody'))
document.querySelector('main').append(table)

const thead = document.createElement('thead')
const th1 = document.createElement('th')
const th2 = document.createElement('th')
const th3 = document.createElement('th')

th1.innerHTML = 'Name'
th2.innerHTML = 'strength'
th3.innerHTML = 'Age'

thead.append(th1)
thead.append(th2)
thead.append(th3)
table.append(thead)

th1.addEventListener('click', () => handleSort('name'))
th2.addEventListener('click', () => handleSort('strength'))
th3.addEventListener('click', () => handleSort('age'))

setInterval(() =>{
    table.querySelector('tbody').remove()
    const tbody = document.createElement('tbody')
    data.forEach(hero => {
        const tr = document.createElement('tr')
        const nameTd = document.createElement('td')
        const strengthTd = document.createElement('td')
        const ageTd = document.createElement('td')

        nameTd.innerHTML = hero.name
        strengthTd.innerHTML = hero.strength
        ageTd.innerHTML = hero.age

        tr.append(nameTd)
        tr.append(strengthTd)
        tr.append(ageTd)
        tbody.append(tr)
    })
    table.append(tbody)
}, 100)

function compare(hero1, hero2) {
    let value = 0
    switch(sort.type) {
        case 'name': value = (() => hero1.name.localeCompare(hero2.name))()
        break;
        case 'age': value = (() => hero1.age - hero2.age)()
        break;
        case 'strength': value = (() => hero1.strength - hero2.strength)()
        break;
        default: return 0
    }
    sort.isDesc && (value = -1*value)
    return value
}

function handleSort(type) {
    console.log(type);
    if (sort.type != type) {
        sort.type = type
    } else {
        sort.isDesc = !sort.isDesc
    }
    data.sort(compare)
    showNotification(sort.type, sort.isDesc)
}

function showNotification(type, isDesc) {
    const previousContainer = document.querySelector('.notification')
    previousContainer && previousContainer.remove()

    const message = `Sorting by ${type}, in ${isDesc ? 'descending' : 'ascending'} order`
    const container = document.createElement('div')
    container.className = 'notification'
    container.classList.add('fade')
    container.innerHTML = message
    document.body.append(container)
    setTimeout(() => container.remove(), 3000)
}