// Assignment Code
var generateBtn = document.querySelector("#generate");


var lcLetters = "qwertyuiopasdfghjklzxcvbnm";
var ucLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numbers = "0123456789";
var specChar = "~!@#$%&-+=_";

var passOpt = "";
var password = "";
console.log(passOpt.length);
// Write password to the #password input
function writePassword() {
    console.log(lcLetters.length);
    var passwordlength = prompt("Choose a password length between 8 and 128 characters")
    while (passwordlength < 8 || passwordlength > 128)
        if (passwordlength < 8) {
            alert("Please choose a length of 8 or more characters")
            passwordlength = prompt("Choose a password length between 8 and 128 characters")
        } else if (passwordlength > 128) {
            alert("Please choose a length of 128 or less characters")
            passwordlength = prompt("Choose a password length between 8 and 128 characters")
        }
    console.log(passwordlength);



    while (passOpt.length === 0) {

        var confirmLcLetters = confirm("Would you like to use lowercase letters?");
        var confirmUcLetters = confirm("Would you like to use uppercase letters?");
        var confirmNumbers = confirm("Would you like to use numbers?");
        var confirmSpecChar = confirm("Would you like to use special characters?");

        if (confirmLcLetters) {
            passOpt = passOpt.concat(lcLetters)

        }
        if (confirmUcLetters) {
            passOpt = passOpt.concat(ucLetters)

        }
        if (confirmNumbers) {
            passOpt = passOpt.concat(numbers)

        }
        if (confirmSpecChar) {
            passOpt = passOpt.concat(specChar)

        }
        else {//this alerts after false specChar
            alert("You must select at least one character type")
        };
    }
    console.log(passOpt)
    // console.log(lcLetters);
    // console.log(ucLetters);
    // console.log(numbers);
    // console.log(specChar);

    for (var i = 0; i < passwordlength; i++) {
        var passNum = Math.floor(Math.random() * passOpt.length);
        // console.log(passNum)
        password += passOpt[passNum];
        // console.log(password)
    }

    // var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




