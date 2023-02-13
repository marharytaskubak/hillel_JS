let sample = 0
while (sample < 3) {

    const EMAIL = prompt("Your email?") 

    const MAIL_FORMAT = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    const PASSWORD = prompt("Write your password")

    const PASSWORD_FORMAT = /^[A-Z]\w{3,11}$/ 

    if (EMAIL.endsWith('.com') && EMAIL.includes(' ') == false && EMAIL.startsWith('@') == false && EMAIL.length <= 15 && EMAIL.match(MAIL_FORMAT) && PASSWORD.match(PASSWORD_FORMAT)) {
        document.write(`Your account successfully registered <br> email: ${EMAIL.toLowerCase().trim()} <br> password: ${PASSWORD}`)
        break
    }
    sample++
    alert(`осталось ${3 - sample}`)
    
    if (sample == 3) {
        alert('Sorry, you don`t have more tries')
    }
}




 

