// 1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
// const array = [1, 24, 'qwerty', 'asdfg', 267, -0.5]
// let num = array.filter(Number)
// function calc() {
//     let sum = num.reduce((total, nextNum) => {
//         return (total + nextNum)
//     })
//     let average = sum / num.length
//     console.log(`Середнє: ${average}`)
// }   
// calc()

// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

// let x = +prompt("Введіть число")
// let znak = prompt('Введіть один із математичних знаків: +, -, *, /, %, ^ (ступінь )')
// let y = +prompt("Введіть друге число")
// function doMath(x, y, znak){
//     if(znak == '+'){
//         return x + y;  
//     } 
//     if(znak == '-'){
//         return x - y;
//     }
//     if(znak == '*'){
//         return x * y; 
//     }
//     if(znak == '/'){
//         return x / y; 
//     } 
//     if(znak == '%'){
//         return x % y;
//     } 
//     if(znak == '^'){
//         return x ^ y; 
//     }
// }
// doMath(x, y, znak);
// console.log(doMath(x, y, znak))

// 3. Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

let main = []
main.length = prompt('число')
let i = 0

function fill(main){
    i += 1;
    let second = []
    second.length = prompt('число')
    let a = 0;
    
    function fill2(second){
        a += 1;
        for(let num = 0; num < second.length; num++){
            num = prompt('значення всіх елементів') 
            second.fill(num)
        }  
    }
    fill2(second);
    console.log(main.fill(second));
}
fill(main);


// 4. Створити функцію, яка прибирає з рядка всі символи, які ми передали після другого аргумента. 'func("hello world", 'l', 'd')' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
// Також забезпечити логіку, при котрій після першого елементу ми можемо передати будь яким аргументом функцію, яка щось достать до нашого рядка, ГОЛОВНЕ щоб функція виконувалася після того як ми проведемо попередні маніпуляції (тобто видалимо символи). 
// let str = prompt('sdfa')
// let a = prompt('bbbbb')
// let b = prompt('bbbbb')

// function changed(){
//     console.log(str.replaceAll(a, '').replaceAll(b, ''))
// }
// changed();

// Можливо додавати будь яку логіку в цю кастомну функцію.
// Приклад:
// const formatter = (string) => string.toUpperCase()
// func("hello world", 'l', 'd', 'o', 'h', formatter) 
// або 
// func("hello world", 'l', 'd', formatter, 'o', 'h') // тут output функції не має змінитися