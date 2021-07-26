const getFormattedDate = (dateObject) => {
    const daysOfWeek = [
        'Monday',
        'Tuesday', 
        'Wednesday', 
        'Thursday', 
        'Friday', 
        'Saturday', 
        'Sunday'
        ]
    const day = daysOfWeek[dateObject.getDay() - 1],
          date = `0${dateObject.getDate()}`.slice(-2),
          month = `0${dateObject.getMonth() + 1}`.slice(-2),
          year = dateObject.getFullYear(),
          minutes = `0${dateObject.getMinutes()}`.slice(-2),
          hours = `0${dateObject.getHours()}`.slice(-2)
          
    return (`${date}.${month}.${year} ${hours}:${minutes} ${day}`)
}

console.log(getFormattedDate(new Date('42 03:24:00')))