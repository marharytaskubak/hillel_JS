const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 

// Знайти суму та кількість позитивних елементів.
const positive = arr.filter((el) => el >= 0)
console.log(`Кількість позитивних ${positive.length}`)
const sum = positive.reduce((accumulator, current) => {
    return accumulator + current
})
console.log(`Сума позитивних ${sum}`)

// Знайти мінімальний елемент масиву та його порядковий номер.
const min = Math.min(...arr)
console.log(`Мінімальний елемент ${min}`)
console.log(`Порядковий мінімального ${arr.indexOf(min)}`)

// Знайти максимальний елемент масиву та його порядковий номер.
const max = Math.max(...arr)
console.log(`Maxnumber ${max}`)
console.log(`Порядковий максимального ${arr.indexOf(max)}`)

// Визначити кількість негативних елементів.
const negative = arr.filter((el) => el <= 0)
console.log(`Кількість негативних ${negative.length}`)

// Знайти кількість непарних позитивних елементів.
const unpairedPositive = arr.filter((el) => el % 2 == 1 && el > 0)
console.log(`Count unpairedPositive  ${unpairedPositive.length}`)

// Знайти кількість парних позитивних елементів.
const pairedPositive = arr.filter((el) => el % 2 == 0 && el > 0)
console.log(`Count pairedPositive  ${pairedPositive.length}`)

// Знайти суму парних позитивних елементів.
const sumPairedPositive = pairedPositive.reduce((accumulator, current) => {
    return accumulator + current
})
console.log(`Сума парних позитивних ${sumPairedPositive}`)

// Знайти суму непарних позитивних елементів.
const positiveUnpair = arr.filter((el) => el % 2 == 1 && el > 0)
const sumUnpairedPositive = positiveUnpair.reduce((accumulator, current) => {
    return accumulator + current
})
console.log(`Сума непарних позитивних ${sumUnpairedPositive}`)

// Знайти добуток позитивних елементів.
const positiveProduct = positive.reduce((accumulator, current) => {
    return accumulator * current
})
console.log(`positive product ${positiveProduct}`)

// Знайти найбільший серед елементів масиву, решту обнулити. (решта елементів має дорівнювати 0)
const arrNew = arr.map(el => el == max ? el : 0) 
console.log(arrNew)
