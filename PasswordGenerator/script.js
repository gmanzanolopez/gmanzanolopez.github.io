// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() { 
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;}
    //var password = generatePassword(50,true,true,true,false,false);
  function generatePassword (length, wordLower, wordUpper, wordNumber, wordSpecial){
    var values = []
    if (wordLower) values += "abcdefghijklmnopqrstuvwxyz";
    if (wordUpper) values += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (wordNumber) values += "0123456789";
    if (wordSpecial) values += "!@#$%^&*+=:,./'?`~";

    var wordLength = prompt ("Choose the length of password. From 8 to 50 characters")
      if (wordLength > "8") {
        wordLength = true;
        console.log(wordLength);
      }else {
        
      }

    var wordLower = prompt ("Do you want Lowercase letters in your password? yes or no" )
    if (wordLower === "yes") {
      wordLower === true;
      console.log(wordLower);
    }else {
      wordLower === false;
    }

    var wordUpper = prompt ("Do you want Uppercase letters in your password? yes or no")
      if (wordUpper === "yes") {
        wordUpper === true;
        console.log(wordUpper);
      }else {
        wordUpper === false;
      }
    
    var wordNumber = prompt ("Do you want numbers? yes or no")
      if (wordNumber === "yes") {
        wordNumber === true;
        console.log(wordNumber);
      }else {
        wordNumber === false;
      }
    
    var wordSpecial = prompt ("Do you want Special Characters? yes or no ")
      if (wordSpecial === "yes") {
        wordSpecial === true;
        console.log(wordSpecial);
      }else {
        wordSpecial === false;
      }
      
  
    var password = "";
    
    for(var i = 0; i <= wordLength; i++) { 
      var NewPass = [Math.floor(Math.random()* wordLength.length)];
      password = NewPass + password;}
      
    
    return password;}
