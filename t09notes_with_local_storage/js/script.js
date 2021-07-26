


//Actual code

const textarea = document.querySelector('textarea')
const notes = document.querySelector('.notes')
const addButton = document.querySelector('#add')
const clearButton = document.querySelector('#clear')

addButton.addEventListener('click', () => {
    const id = Date.now()
    const name = `note${id}`
    const value = textarea.value
    localStorage.setItem(name, value)
    update()
})

clearButton.addEventListener('click', () => {
    if (confirm("Are you sure?")) {
        localStorage.clear()
        update()
    }
})

function update() {
        notes.innerHTML = ''
    Object.keys(localStorage).forEach((key) => {
        const note = document.createElement('p')
        note.innerHTML = `${localStorage.getItem(key)} [${getFormattedDate(new Date(parseInt(key.slice(4))))}]`
        notes.append(note)
    })
    textarea.value = ""
    if (!notes.innerHTML) {
        notes.innerHTML = '[Empty]'
        setTimeout(() => alert(`It's empty. Tryto input something in "Text input".`), 100)
          
    }
}

const getFormattedDate = (dateObject) => {
    const date = `0${dateObject.getDate()}`.slice(-2),
          month = `0${dateObject.getMonth() + 1}`.slice(-2),
          year = dateObject.getFullYear(),
          seconds = `0${dateObject.getSeconds()}`.slice(-2),
          minutes = `0${dateObject.getMinutes()}`.slice(-2),
          hours = `0${dateObject.getHours()}`.slice(-2)
          
    return (`${date}.${month} ${hours}:${minutes}:${seconds}`)
}

update()
