// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordlength = prompt("Please enter the length of the password");
var choiceLowercase = confirm("Do you want to include lowercase letters ?");
var choiceUppercase = confirm("Do you want to include uppercase letters ?");
var choiceNumbers = confirm("Do you want to include numbers ?");
var choiceSpecialCharacters = confirm("Do you want to include special characters ?");


// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordlength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Input password length and assign this length to the password textarea
function inputLength() {
do { 
 if (passwordlength < 8 || passwordlength > 128 ) {
  alert("Please enter a length of at least 8 characters and no more than 128 characters");
  passwordlength = prompt("Please reenter the length of the password")};
} while (passwordlength < 8 || passwordlength > 128 );

document.getElementById("password").maxLength = passwordlength;
 };

//Generate random password
function generatePassword(passwordlength) {
  
  var password = "" ;
  var characters = "";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specialCharacters = "-_&@%*$+=#";

  if(choiceLowercase == true) {
  characters+=lowerCase };
  
  if(choiceUppercase == true) { 
    characters+=upperCase };
  
  if(choiceNumbers == true) {
  characters+=numbers };
  
  if(choiceSpecialCharacters == true) {
  characters+=specialCharacters };

  for (var i = 0 ; i < passwordlength ; i++)   {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return password;
};

//Validate the criteria , if no criteria was chossen send an alert message an refresh the page
function validateInput() {
  if ((choiceLowercase == false) && (choiceUppercase == false) && (choiceNumbers == false) && (choiceSpecialCharacters == false))
  {
   alert("Please choose at least one criteria");
   location.reload();
 }
  
};

inputLength()
validateInput()