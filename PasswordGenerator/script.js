// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Returns random value from 0 to max -1
//getRandomInt(9) -> returns value from 0 to 8
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
//var password = generatePassword(190,true,true,true,false,false);
function generatePassword (length, lowercase, uppercase, numeric, special){
  var characters = "";
  if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
  if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numeric) characters += "0123456789";
  if (special) characters += "!@#$%^&*()";

  var password = "";
  for(var i = 0; i < length; i+=1)
  {
    var randCharacterIndex = getRandomInt(characters.length()); //get random character
    password += characters[randCharacterIndex];
  }
  
  return password;
}
