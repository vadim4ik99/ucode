let weatherData
const weatherRequest = async () => 
    await fetch(
        'https://api.openweathermap.org/data/2.5/onecall?lat=51.50&lon=0.13&units=metric&appid=80eb5283e9b6a843070e987173542132'
    ).then(function (response) {
        return response.json()
    })

weatherRequest().then((weatherData) => {

 console.log(weatherData);

    document.querySelectorAll('.day').forEach((day, index) => {
        const date = new Date(parseInt(Date.now()) + (index * 86400000))
        const temperature = Math.round(weatherData.daily[index].temp.day)
        const iconCode = weatherData.daily[index].weather[0].icon

        day.querySelector('.date').innerHTML = `${`0${date.getDate()}`.slice(-2)}.${`0${date.getMonth()}`.slice(-2)}`
        day.querySelector('.sky').style.backgroundImage = `url(${"http://openweathermap.org/img/w/" + iconCode + ".png"})`
        day.querySelector('.temperature').innerHTML = `+${temperature}°C`
        
    })




})


