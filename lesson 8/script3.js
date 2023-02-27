// 3. Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

let main = []
main.length = prompt('Введите число')
let i = 0

function fill(main){
    i += 1;
    let second = []
    second.length = prompt('Введите число')
    let a = 0;
    function fill2(second){
        a += 1;
        let num = prompt('значення всіх елементів') 
        second.fill(num)
    }
    fill2(second);
    console.log(main.fill(second));
}
fill(main);