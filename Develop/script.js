// Assignment code here

function questions() {

  var characterCount = window.prompt("Choose between 8-128 characters for your password length");
  while (characterCount < 8 || characterCount > 128 || isNaN(characterCount)) {
    window.alert("Must select a value between 8 and 128")
    return questions();
    //var characterCount = parseInt(characterCount);//
    console.log(characterCount);
  }
  
  var lowerCase = window.confirm("Click OK to include lowercase letters");

  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  console.log(lowerCase);  
  
  
  var upperCase = window.confirm("Click OK to include uppercase letters");

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  console.log(upperCase);
 
  
  var numeric = window.confirm("Click OK to include numbers");

  var numeric = "0123456789";  
  console.log(numeric);

  
  var specialChars = window.confirm("Click OK to include special characters");
  var specialChars = "`~!@#$%^&*()-_=+[}{]";  
  console.log(specialChars);

} 

function getLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
 }
console.log(getLower());

function getUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
 }
console.log(getUpper());

function getNumeric() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
 }
console.log(getNumeric());

function getSpecialChars() {
  const specialCharList = "~`!@#$%^&*()_-+={[}];:<>|";
  return specialCharList[Math.floor(Math.random() * specialCharList.length)];
 }
console.log(getSpecialChars());










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
