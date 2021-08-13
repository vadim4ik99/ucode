let chooseAnimal = (str = '', hint = '') => {
  hint && console.log(hint)
  let animal = prompt("What animal is the superhero most similar to?", str);
  if (animal.length <= 20 && animal.match(/^(\w+)$/) && animal.match(/^[A-Z]+$/i)) return animal
  return chooseAnimal(animal, "Enter no more than 20 letters!")
}

let chooseGender = () => {
  let gender = prompt("What gender are they?")
  return (gender.match(/^[A-Z]+$/i) ? gender : chooseGender())
}

  let chooseAge = (str = '', hint = '') => {
    hint && console.log(hint)
    let age = prompt("Age (years)", str);
    if (age.length <= 5 && age[0] != 0) return age
    return chooseAnimal(age, "Enter less than 9999!")
  }

  alert(
        chooseAnimal() 
        + '-' 
        + (() => {
                switch(chooseGender()) {
                    case 'male':return (chooseAge() > 18 ? 'man' : 'boy')
                    break
                    case 'female':return (chooseAge() > 18 ? 'woman' : 'girl')
                    break
                    default:return (chooseAge() > 18 ? 'hero' : 'kid')
                }
            })()
  )


    


