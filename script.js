// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declaring passwordlength as a global variable
var passwordlength = prompt("Please enter the length of the password");

// Input password length and validating criteria function //

function inputLength () {
// do while loop to prompt an alert message until meeting the length criteria (8 to 128 characters)  
do { 
  if (passwordlength < 8 || passwordlength > 128 ) {
    alert("Please enter a length of at least 8 characters and no more than 128 characters");
    passwordlength = prompt("Please reenter the length of the password");}
} while (passwordlength < 8 || passwordlength > 128 );

// Assign this length to the password textarea
document.getElementById("password").maxLength = passwordlength;
 };

// Calling the inputLength() function 
inputLength()

// Declaring confirm windows for choosing passsword criteria as a global variables
 var choiceLowercase = confirm("Do you want to include lowercase letters ?");
 var choiceUppercase = confirm("Do you want to include uppercase letters ?");
 var choiceNumbers = confirm("Do you want to include numbers ?");
 var choiceSpecialCharacters = confirm("Do you want to include special characters ?");
 
//Generate random password function
function generatePassword (passwordlength) {

//Declaring local variables 
  var password = "" ;
  var characters = "";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specialCharacters = "-_&@%*$+=#";

// 'if condition' to include lowercase letters in the password
  if (choiceLowercase == true) {
    characters+=lowerCase
   };
  
// 'if condition' to include uppercase letters in the password  
  if (choiceUppercase == true) { 
    characters+=upperCase
   };

// 'if condition' to include numbers in the password   
  if (choiceNumbers == true) {
    characters+=numbers 
  };

// 'if condition' to include special characters in the password   
  if (choiceSpecialCharacters == true) {
    characters+=specialCharacters
  };

// 'for loop' to add a random character to the password at th end of each loop till arriving to the password length  
  for (var i = 0 ; i < passwordlength ; i++)   {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
   }
// this function return the password   
   return password;
};

//this function validate the criteria , if no criteria was chosen, it sends an alert message and reshow the confirm windows
function validateInput() {
  do  {
    if ((choiceLowercase == false) && (choiceUppercase == false) && (choiceNumbers == false) && (choiceSpecialCharacters == false)){
   
    alert("Please choose at least one criteria");
   
    choiceLowercase = confirm("Do you want to include lowercase letters ?");
    choiceUppercase = confirm("Do you want to include uppercase letters ?");
    choiceNumbers = confirm("Do you want to include numbers ?");
    choiceSpecialCharacters = confirm("Do you want to include special characters ?");}

    } while ((choiceLowercase == false) && (choiceUppercase == false) && (choiceNumbers == false) && (choiceSpecialCharacters == false))
};

// Calling the validateInput function
validateInput()

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordlength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);