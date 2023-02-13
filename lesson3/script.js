const name = prompt("What`s your name?")

const surname = prompt("What`s your surname?")

const day =  Number(prompt("What day were you born?")) 

const month =  Number(prompt("What month were you born?"))

const year =  Number(prompt("What year did you birth?"))  

const age = 2022 - year

if(month == 1 && day >= 20 || month == 2 && day <= 18) {
    userZodiac = "Aquaries ♒"
} else if(month == 2 && day >= 19 || month == 3 && day <= 20){
    userZodiac = "Pisces ♓"
} else if(month == 3 && day >= 21 || month == 4 && day <= 19){
    userZodiac = "Aries ♈"
} else if(month == 4 && day >= 20 || month == 5 && day <= 20){
    userZodiac = "Taurus ♉"
} else if(month == 5 && day >= 21 || month == 6 && day <= 20){
    userZodiac = "Gemini ♊"
} else if(month == 6 && day >= 21 || month == 7 && day <= 22){
    userZodiac = "Cancer ♋"
} else if(month == 7 && day >= 23 || month == 8 && day <= 22){
    userZodiac = "Leo ♌"
} else if(month == 8 && day >= 23 || month == 9 && day <= 22){
    userZodiac = "Virgo ♍"
} else if(month == 9 && day >= 23 || month == 10 && day <= 22){   userZodiac = "Libra ♎"
} else if(month == 10 && day >= 23 || month == 11 && day <= 21){ 
    userZodiac = "Scorpio ♏"
} else if(month == 11 && day >= 22 || month == 12 && day <= 21){
    userZodiac = "Sagittarius ♐"
} else if(month == 12 && day >= 22 || month == 1 && day <= 19){
    userZodiac = "Capricorn ♑"
}

if(year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
    document.write(`User Bio: ${name}, ${surname}, ${age} years old (leap year), ${userZodiac}`)
} else if(year % 100 == 0 || year) {
    document.write(`User Bio: ${name}, ${surname}, ${age} years old, ${userZodiac}`)
} 
