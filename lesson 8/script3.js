// 3. Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

let main = []

function fill1(main){
    main.length = prompt('Довжина основного массиву')
    
    for(let a = 0; a < main.length; a++){
        let second = []
        main[a] = second
        second.length = prompt('Довжина внутрішнього массиву')
    
        for(let b = 0; b < main[a].length; b++){
            let num = prompt('Значення елементів')
            main[a][b] = num
        }
    }
    console.log(main)
}
fill1(main);
