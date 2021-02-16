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
var lowercaseCheck;

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
  return passwordLength();
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
    determineUppercase = true;
    return determineUppercase();
    //if true then finish running function and then change value of the function to true
  }
  else if ((uppercaseCheck==='No') || (uppercaseCheck==='n')) {
    determineUppercase=false;
    return determineUppercase();
    //if true then finish running function and then change value of the function to false
  }
  else {
    alert('You must type Yes or no');
    determineUppercase();
    //if everything is false then re-run function
  }
  return uppercaseCheck();
  //when function runs true then finish running the prompt and change the value for uppercase to either true or false
  
}
//Copy and paste determinUppercase function but changed the variable names for each set of criteria
function determineSpecialChar () {
  specialCheck = prompt('Would you like special characters?\n(Yes or No)');
  if ((specialCheck===null) || (specialCheck==='')) {
    alert('You must type Yes or no');
  }
  else if ((specialCheck==='Yes') || (specialCheck==='y')) {
    determineSpecialChar = true;
    return determineSpecialChar();
  }
  else if ((specialCheck==='No') || (specialCheck==='n')) {
    determineSpecialChar=false;
    return determineSpecialChar();
  }
  else {
    alert('You must type Yes or no');
    determineSpecialChar();
  }
  return specialCheck();
  
}
//Copy and paste determinUppercase function but changed the variable names for each set of criteria
function determineNumber () {
  numberCheck = prompt('Would you like numbers?\n(Yes or No)');
  if ((numberCheck===null) || (numberCheck==='')) {
    alert('You must type Yes or no');
  }
  else if ((numberCheck==='Yes') || (numberCheck==='y')) {
    determinenumber = true;
    return determineNumber();
  }
  else if ((numberCheck==='No') || (numberCheck==='n')) {
    determineNumber=false;
    return determineNumber();
  }
  else {
    alert('You must type Yes or no');
    determineNumber();
  }
  return numberCheck();
  
}
function determineLowercase () {
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

      return lowercaseCheck();
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
