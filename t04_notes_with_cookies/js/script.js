// copy-pasted functions

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            // if (c.substring(name.length, c.length) == 'undefined') return undefined
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getCookies() {

    var cookies = {};

    if (document.cookie && document.cookie != '') {
        var split = document.cookie.split(';');
        for (var i = 0; i < split.length; i++) {
            var name_value = split[i].split("=");
            name_value[0] = name_value[0].replace(/^ /, '');
            cookies[decodeURIComponent(name_value[0])] = decodeURIComponent(name_value[1]);
        }
    }

    //my code. read only names begin with cookie
    Object.keys(cookies).forEach(key => {
        key.slice(0, 6) != 'cookie' && delete cookies[key]
    });

    return cookies;

}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(new Date().getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    console.log(cookies);

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        console.log(name);
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        console.log(document.cookie);
    }
}



//Actual code

const textarea = document.querySelector('textarea')
const notes = document.querySelector('.notes')
const addButton = document.querySelector('#add')
const clearButton = document.querySelector('#clear')

addButton.addEventListener('click', () => {
    const id = Date.now()
    const name = `cookie${id}`
    const value = textarea.value
    setCookie(name, value)
})

clearButton.addEventListener('click', () => {
    if (confirm("Are you sure?")) {
        deleteAllCookies()
        update()
    }
})

setInterval(() => {
    const cookies = getCookies()
    notes.innerHTML = ''
    Object.values(cookies).forEach((value) => {
        const note = document.createElement('p')
        note.innerHTML = value
        notes.append(note)
    })
    textarea.value = ""
    if (!notes.innerHTML) {
        notes.innerHTML = '[Empty]'
        setTimeout(() => alert(`It's empty. Tryto input something in "Text input".`), 100)
    }
},100)
