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
//var lowercaseCheck;

//function for determining the length of the password 
function determineLength () {
  //creating prompt 
  passwordLength = prompt('How many characters long would you like for the password to be (8-128):');
  if (passwordLength<8) {
    alert('Length is not a number between 8-128');
    determineLength();
    //if true re-run function
  }
  else if (passwordLength>128) {
    alert('Length is not a number between 8-128');
    determineLength();
    //if true re-run function
  }
  if (passwordLength===NaN) {
    alert('Length is not a number between 8-128');
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

//function to check for uppercase characters
function determineUppercase () {
  //creating prompt
  uppercaseCheck = prompt('Would you like Uppercase Characters? \n(Yes or No)');
  //first if statement is to check for null 
  if ((uppercaseCheck===null) || (uppercaseCheck==='')) {
    alert('You must type Yes or no');
    determineUppercase();
    //if true run entire function again
  }
  //first else if is to check for 'yes' or 'y'
  else if ((uppercaseCheck==='Yes') || (uppercaseCheck==='y')) {
    //change value of variable uppercaseCheck and not the function itself.
    uppercaseCheck = true;
    return uppercaseCheck;
    //if true then finish running function and then change value of the variable to true
  }
  else if ((uppercaseCheck==='No') || (uppercaseCheck==='n')) {
    uppercaseCheck = false;
    alert('The password will be lowercase');
    //determineLowercase(); may not need to run a seperate function
    return uppercaseCheck;

    //if true then finish running function and then change value of the function to false
  }
  else {
    alert('You must type Yes or no');
    determineUppercase();
    //if everything is false then re-run function
  }
  return uppercaseCheck;
  //when function runs true then finish running the prompt and change the value for uppercase to either true or false
  
}
//Copy and paste determinUppercase function but changed the variable names for each set of criteria
function determineSpecialChar () {
  specialCheck = prompt('Would you like special characters?\n(Yes or No)');
  if ((specialCheck===null) || (specialCheck==='')) {
    alert('You must type Yes or no');
    determineSpecialChar();
  }
  else if ((specialCheck==='Yes') || (specialCheck==='y')) {
    specialCheck = true;
    return specialCheck;
  }
  else if ((specialCheck==='No') || (specialCheck==='n')) {
    specialCheck = false;
    return specialCheck;
  }
  else {
    alert('You must type Yes or no');
    determineSpecialChar();
  }
  return specialCheck;
  
}
//Copy and paste determinUppercase function but changed the variable names for each set of criteria
function determineNumber () {
  numberCheck = prompt('Would you like numbers?\n(Yes or No)');
  if ((numberCheck===null) || (numberCheck==='')) {
    alert('You must type Yes or no');
    determineNumber();
  }
  else if ((numberCheck==='Yes') || (numberCheck==='y')) {
    numberCheck = true;
    return numberCheck;
  }
  else if ((numberCheck==='No') || (numberCheck==='n')) {
    numberCheck=false;
    return numberCheck;
  }
  else {
    alert('You must type Yes or no');
    determineNumber();
  }
  return numberCheck;
  
}
// Function to make all the items lowercase if the uppercase criteria is 'NO'
/*function determineLowercase () {
  lowercaseCheck = function ifUppercaseIsNo () {
      if (uppercaseCheck=== false) {
        lowercaseCheck = true;
        numberCheck = numberCheck.toLowerCase;
        specialCheck = specialCheck.toLowerCase;
      }
      else if (uppercaseCheck===true) {
        lowercaseCheck = false;
      }
      else {
        return determineLowercase();
      }

      return lowercaseCheck;
  }
}*/
//Function to run all of the functions to generate a password
function generatePassword (){
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineSpecialChar();
  console.log(specialCheck);
  determineNumber();
  console.log(numberCheck);
  
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

  for (var i = 0; i < passwordLength; i++) { 
    passwordChar += characterChoice.charAt(Math.floor(Math.random() * characterChoice.Length));
  }
  return passwordChar;
}
//when running generatePassword it onlu displays lowercase a * password length?

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
