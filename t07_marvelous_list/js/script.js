
const data = [
    {
        title: 'Avengers: Endgame',
        poster: './assets/images/avengers.jpg',
        actors: [
            'Vadim Baranivsky',
            'My Second Ego',
            'DRAGONSLAYER'
        ],
        date: '01.01.0'+ 1,
        description: 'blalbalblablaball abablbalba lbablalbablabbal ablbaablblala lababablabababab labablablab alabbalbalblablablabla balblablalbablabalbla'
    }, 
    {
        title: 'About newYork',
        poster: './assets/images/newyork.png',
        actors: [
            'Stas Mykhailow',
            'Random Name',
            'Johny Depp'
        ],
        date: '01.01.20',
        description: 'blalbalbl ablaballaba blbalbalbablalbab labbalablbaablblala lababablabababab labablablabalabb albalblablab lablabalblablalbablabalbla'
    },
    {
        title: 'Inception',
        poster: './assets/images/inception.jpg',
        actors: [
            'Hanz Zimmer',
            'Christopher Nolan',
            'Leonardo DiCaprio'
        ],
        date: '01.01.10',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
]

showData(0)

document.querySelectorAll('li').forEach((li, index) => li.addEventListener('click', () => showData(index)))

function showData(index) {
    
    const film = data[index],
          description = document.querySelector('.description')
    
    description.querySelector('h2').innerHTML = film.title
    description.querySelector('.date').innerHTML = film.date
    description.querySelector('.actors').innerHTML = ''

    film.actors.forEach(actor => {
        const actorElement = document.createElement('div')
        Object.assign(actorElement, {
            innerHTML: actor,
            className: 'actor'
        })
        description.querySelector('.actors').append(actorElement)
    })

    description.querySelector('p').innerHTML = film.description

    //if img is the same = bug
    document.querySelector('img').remove()
    document.querySelector('.container').append(document.createElement('img'))

    document.querySelector('img').src = film.poster
    document.querySelector('.selected').classList.remove('selected')
    document.querySelectorAll('li')[index].classList.add('selected')
}