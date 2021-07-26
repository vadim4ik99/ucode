const heroClasses = ['good', 'evil', 'unknown']
const heroPowers = ['fire', 'water', 'air', 'earth']

document.querySelector('ul').querySelectorAll('li')
    .forEach(hero => {
        hero.append(document.createElement('br'))
        !heroClasses.includes(hero.className)
            &&
            (hero.className = 'unknown')

        !hero.hasAttribute("data-element")
            &&
            (hero.setAttribute("data-element", "none"))

        let data = hero.getAttribute("data-element")

        heroPowers.forEach((power) => {
            if (data.includes(power)) {
                let powerNode = document.createElement('div')
                powerNode.className = 'elem'
                powerNode.classList.add(power)

                hero.append(powerNode)
            }
        })

        if (data == 'none') {
            let powerNode = document.createElement('div')
                powerNode.classList.add('elem')
                powerNode.classList.add('none')
                let line = document.createElement('div')
                line.classList.add('line')
                powerNode.append(line)
                

                hero.append(powerNode)
        }
    })