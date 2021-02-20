// Assignment Code
//creating variable for the different types of characters
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"

// Creating variables that will be hoisted later 
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

//function for determining the length of the password 
function determineLength () {
  //creating prompt 
  passwordLength = prompt('How many characters long would you like for the password to be (8-128):');
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength))  {
    alert('Length is not a number between 8-128')
    determineLength();
    //if true re-run function
  }
  else {
    alert('Please choose your password criteria');
    //if all of the if's are false then run alert and the value for passwordLength is between 8 and 128
  }
  return passwordLength;
    //when function runs true finish runnning prompt for passwordLength
}

//Function to run all of the functions to generate a password
function generatePassword (){
  determineLength();
  uppercaseCheck = confirm('Would you like Uppercase Characters? \n(Yes or No');
  specialCheck = confirm('Would you like special characters?\n(Yes or No)');
  numberCheck = confirm('Would you like numbers?\n(Yes or No)');

  
  var characterChoice = lowercaseChar;
  var passwordChar = ''; 

  if (uppercaseCheck && specialCheck && numberCheck) {

    characterChoice += (uppercaseChar + specialChar + numberChar);
  }
  else if (uppercaseCheck && specialCheck) {
    characterChoice += (uppercaseChar + specialChar);
  }
  else if (uppercaseCheck && numberCheck) {
    characterChoice += (uppercaseChar + numberChar);
  }
  else if (specialCheck && numberCheck) {
    characterChoice += (specialChar + numberChar);
  }
  else if (numberCheck) {
    characterChoice += (numberChar);
  }
  else if (specialCheck) {
    characterChoice += (specialChar);
  }
  else if (uppercaseCheck) {
    characterChoice += (uppercaseChar);
  }
  else {
    characterChoice === lowercaseChar;
  }
  console.log(characterChoice);
  for (var i = 0; i < passwordLength; i++) { 
    passwordChar += characterChoice.charAt(Math.floor(Math.random() * characterChoice.length));
  }
  return passwordChar;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
