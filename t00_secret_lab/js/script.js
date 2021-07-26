let isHulk = false,
    hero = document.querySelector('#hero'),
    lab = document.querySelector('#lab')
const transformation = () => {
    isHulk = !isHulk
    if (isHulk) {
        hero.innerHTML = 'Hulk'
        Object.assign(lab.style, {
            fontSize: '130px',
            letterSpacing: '6px',
        })    
        Object.assign(lab.style, {
            background: '#70964b'
        })     
    } else {
        hero.innerHTML = 'Bruce Banner'
        Object.assign(hero.style, {
            fontSize: '60px',
            letterSpacing: '2px'
        })    
        Object.assign(lab.style, {
            background: '#ffb300'
        })    
    }

}
  