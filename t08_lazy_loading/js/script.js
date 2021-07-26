const notification = document.createElement('div')
notification.className = 'notification'
document.body.append(notification)

const images = document.querySelectorAll('img')
document.querySelector('.count')

let loaded = 0

images.forEach((image, index) => {
    // const temp = image.src
    image.setAttribute('loading', 'lazy')
    image.addEventListener('load', () => {
        loaded++
        notification.innerHTML = `number of images loaded: ${loaded}`
        if (loaded == images.length) {
            notification.classList.add('fade')
            setTimeout(() => notification.remove(), 3000)
        }
    })
    image.addEventListener('error', () => image.src = './assets/images/temp.png')
    image.src = image.getAttribute('data-src')
    index == 13 && (image.src = 'err')
})

