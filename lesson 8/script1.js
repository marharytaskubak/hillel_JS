// 1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
const array = [1, 24, 'qwerty', 'asdfg', 267, -0.5]
let num = array.filter(Number)
function calc() {
    let sum = num.reduce((total, nextNum) => {
        return (total + nextNum)
    })
    let average = sum / num.length
    console.log(`Середнє: ${average}`)
}   
calc()