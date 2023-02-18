let arr = []
arr.length = Math.round(Math.abs(prompt('Введите число от 2 до 10')))
let a = arr.length >= 2 && arr.length <= 10
let result = 1

while (!a){
    if (arr.length >= 2 && arr.length <= 10){
        break
    } 
    alert('Неверно, введите подходящее число')
    arr.length = Math.round(Math.abs(prompt('Введите число от 2 до 10')))
    console.log('not ok')
}

for(let i = 0; i < arr.length; i++){
    let el = Math.round(Math.random()*10);
    console.log(`random ${el}`) 
    arr[i] = el
    result = result * arr[i]
}  
console.log(arr) 
console.log(result)
