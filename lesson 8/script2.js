// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

let x = +prompt("Введіть число")
let znak = prompt('Введіть один із математичних знаків: +, -, *, /, %, ^ (ступінь )')
let y = +prompt("Введіть друге число")
function doMath(x, y, znak){
    if(znak == '+'){
        return x + y;  
    } 
    if(znak == '-'){
        return x - y;
    }
    if(znak == '*'){
        return x * y; 
    }
    if(znak == '/'){
        return x / y; 
    } 
    if(znak == '%'){
        return x % y;
    } 
    if(znak == '^'){
        return x ^ y; 
    }
}
doMath(x, y, znak);
console.log(doMath(x, y, znak))