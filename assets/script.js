// Assignment code here

function generatePassword() {
  //Initializing the password requirements
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var numericCharacters = "0123456789";
  var nonSelected = true;
  var password = "";
  var passwordCreator = "";
  var ensureRequirements = "";
  var index = 0;

  //Loop to get the valid length for password
  while (true) {
    var pwLength = prompt(
      "Length of Password - Please enter a number between 8 and 128"
    );
    //checking if the input length is a null, lesser than 8 or great than 128
    if (pwLength === null || pwLength < 8 || pwLength > 128) {
      alert("Please enter a valid number between 8 and 128");
    }
    //checking if the input length is non-numeric
    else if (isNaN(pwLength)) {
      alert("Please enter a numeric value.");
    } else {
      break;
    }
  }

  //loop to get the Password requirements
  while (nonSelected) {
    var upperCase = confirm("Do you want uppercase letters?");
    if (upperCase) {
      passwordCreator = passwordCreator + upperCaseLetters;
      //ensuring the Password has at least one of the requested requirements
      index = Math.floor(Math.random() * upperCaseLetters.length);
      ensureRequirements = ensureRequirements + upperCaseLetters[index];
      pwLength--;
    }
    var lowerCase = confirm("Do you want lowercase letters?");
    if (lowerCase) {
      passwordCreator = passwordCreator + lowerCaseLetters;
      //ensuring the Password has at least one of the requested requirements
      index = Math.floor(Math.random() * lowerCaseLetters.length);
      ensureRequirements = ensureRequirements + lowerCaseLetters[index];
      pwLength--;
    }
    var numeric = confirm("Do you want numeric characters?");
    if (numeric) {
      passwordCreator = passwordCreator + numericCharacters;
      //ensuring the Password has at least one of the requested requirements
      index = Math.floor(Math.random() * numericCharacters.length);
      ensureRequirements = ensureRequirements + numericCharacters[index];
      pwLength--;
    }
    var special = confirm("Do you want special characters?");
    if (special) {
      passwordCreator = passwordCreator + specialCharacters;
      //ensuring the Password has at least one of the requested requirements
      index = Math.floor(Math.random() * specialCharacters.length);
      ensureRequirements = ensureRequirements + specialCharacters[index];
      pwLength--;
    }

    //if user selected nome of the above options, alerting them to pick at least one option
    if (upperCase || lowerCase || numeric || special) nonSelected = false;
    else {
      nonSelected = true;
      alert(
        "Please select at least one option (Uppercase, Lowercase, Numeric or Special Characters)"
      );
    }
  }

  //adding the requested requirements to the password
  password = ensureRequirements;
  //generating the password
  for (i = 0; i < pwLength; i++) {
    index = Math.floor(Math.random() * passwordCreator.length);
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
