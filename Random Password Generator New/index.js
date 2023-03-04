let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 16

let pass1 = document.getElementById("pass-1")
let pass2 = document.getElementById("pass-2")

function getRandomCharacter() {

    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]

}

function generateRandomPassword() {

    let randomPasswordOne = ""
    let randomPasswordTwo = ""

    for (let i = 0; i < passwordLength; i++) {
        
        randomPasswordOne += getRandomCharacter()
        randomPasswordTwo += getRandomCharacter()
        
    }

    console.log(randomPasswordOne + " -and- " + randomPasswordTwo)
    pass1.textContent = randomPasswordOne
    pass2.textContent = randomPasswordTwo

}


