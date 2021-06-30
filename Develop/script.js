// Assignment code here

// variable declarations
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var special = ['!', '"', '#', '$', '%', '^', '&', '*', '(', ')', '~', '[', ']', ';', ':', '/', '|', '?', '<', '>', '.', ',', '-', '_', '=', '+'];

//NEED TO TIE THESE TO 'GENERATE PASSWORD' BUTTON
// qualifying criteria usage questions
function length() {
  var passwordLength = prompt("Choose between 8-128 characters for your password length");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Must select a value between 8 and 128");
    return length();
  }
};

function selection() {
  confirm("Must select 'Yes' to AT LEAST one of the following 4 prompts!");
};

function getLowerCase() {
  var useLower = prompt('Use lower case letters? Type "yes" or "no".');
  if (useLower === 'y' || useLower === 'yes'  || useLower === 'Yes') {
    return true;
  } else if (useLower === 'n' || useLower === 'no' || useLower === 'No') {
    return false;
  } else (useLower === null || useLower === '')
  alert('Please type "yes" or "no".');
  getLowerCase();
};

function getUpperCase() {
  var useUpper = prompt('Use upper case letters? Type "yes" or "no".');
  if (useUpper === 'y' || useUpper === 'yes'  || useUpper === 'Yes') {
    return true;
  } else if (useUpper === 'n' || useUpper === 'no' || useUpper === 'No') {
    return false;
  } else (useUpper === null || useUpper === '')
  alert('Please type "yes" or "no".');
  getUpperCase();
};

function getNumber() {
  var useNumber = prompt('Use numbers? Type "yes" or "no".');
  if (useNumber === 'y' || useNumber === 'yes'  || useNumber === 'Yes') {
    return true;
  } else if (useNumber === 'n' || useNumber === 'no' || useNumber === 'No') {
    return false;
  } else (useNumber === null || useNumber === '')
  alert('Please type "yes" or "no".');
  getNumber();
};

function getSpecial() {
  var useSpecial = prompt('Use special characters? Type "yes" or "no".');
  if (useSpecial === 'y' || useSpecial === 'yes'  || useSpecial === 'Yes') {
    return true;
  } else if (useSpecial === 'n' || useSpecial === 'no' || useSpecial === 'No') {
    return false;
  } else (useSpecial === null || useSpecial === '')
  alert('Please type "yes" or "no".');
  getSpecial();
};

function generatePassword() {
  length();
  selection();
  getLowerCase();
  getUpperCase();
  getNumber();
  getSpecial();

// I think this is where the password generation occurs
//BUT HOW??!!

};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





