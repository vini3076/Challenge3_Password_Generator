// Assignment code here

function generatePassword() {
  //Initializing the password requirements
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var numericCharacters = "0123456789";
  var nonSelected = true;
  var password = "";
  var passwordCreator="";
  var ensureRequirements = "";
  var index = 0;


  //Loop to get the valid length for password
  while (true) {
    var pwLength = prompt(
      "Length of Password - Please enter a number between 8 and 128"
    );
    if (pwLength === null || pwLength < 8 || pwLength > 128) {
      alert("Please enter a valid number between 8 and 128");
    } else if (isNaN(pwLength)){
      alert("Please enter a numeric value.");
    }
    else {
      break;
    }
  }



//loop to get the Password requirements
while(nonSelected){
  var upperCase = confirm("Do you want uppercase letters?");
   if (upperCase) {
    passwordCreator = passwordCreator + upperCaseLetters;
    index = Math.floor(Math.random() * upperCaseLetters.length);
    //ensuring the Password has at least one of the requested requirements
    ensureRequirements = ensureRequirements + upperCaseLetters[index];
    pwLength--;
    
   }
  var lowerCase = confirm("Do you want lowercase letters?");
  if (lowerCase) {
    passwordCreator = passwordCreator + lowerCaseLetters;
    index = Math.floor(Math.random() * lowerCaseLetters.length);
    ensureRequirements = ensureRequirements + lowerCaseLetters[index];
    pwLength--;
   }
  var numeric = confirm("Do you want numeric characters?");
  if (numeric) {
    passwordCreator = passwordCreator + numericCharacters;
    index = Math.floor(Math.random() * numericCharacters.length);
    ensureRequirements = ensureRequirements + numericCharacters[index];
    pwLength--
   }
  var special = confirm("Do you want special characters?");
  if (special) {
    passwordCreator = passwordCreator + specialCharacters;
    index = Math.floor(Math.random() * specialCharacters.length);
    ensureRequirements = ensureRequirements + specialCharacters[index];
    pwLength--;
   }

   if (upperCase || lowerCase ||numeric ||special)
     nonSelected = false;
   else {
     nonSelected = true;
     alert ("Please select at least one option (Uppercase, Lowercase, Numeric or Special Characters");
   }
  }
 
  console.log(pwLength);
 
//adding the requested requirements to the password
  password = ensureRequirements;
  console.log(passwordCreator.length);
  for (i=0;i < pwLength; i++ ){
  index = Math.floor(Math.random() * passwordCreator.length);

  console.log("index: "+ index);
  password = password + passwordCreator[index];
  }

  return password;
}
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
