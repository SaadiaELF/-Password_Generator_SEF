// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbn0123456789+/*-@%";
var choiceLowercase = confirm("Do you want to include lowercase letters ?");
var choiceUppercase = confirm("Do you want to include uppercase letters ?");
var choiceNumbers = confirm("Do you want to include numbers ?");
var choiceSpecialCharacters = confirm("Do you want to include special characters (+ / * - @ %) ?");
var passwordlength = prompt("Please enter a length of at least 8 characters and no more than 128 characters");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

choiceLowercase 
choiceUppercase 
choiceNumbers 
choiceSpecialCharacters
passwordlength