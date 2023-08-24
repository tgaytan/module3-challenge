// creating variables with supported characters for password
// 0 is for lowercase alphabet
// 1 is for uppercase alphabet
// 2 is for integers
// 3 is for special characters
var possibleCharac = [];
possibleCharac[0] = "abcdefghijklmnopqrstuvwxyz";
possibleCharac[1] = possibleCharac[0].toUpperCase();
possibleCharac[2] = "0123456789";
possibleCharac[3] = " \"!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";


//function to request criteria from user and then generate output
function generatePassword() {
  var allPossibleCharac = ""; //resets possible characeters if user hits the Generate Password button again

  //prompts for length of password and will keep prompting until valid answer is given
  do {
    var passwordLength = prompt("how many characters does this password need to be? Enter an integer between 8 and 128 (8 and 128 are valide values)");
    passwordLength = Number(passwordLength); // used this to verify if input was a number: https://stackoverflow.com/questions/69355885/what-is-the-best-way-to-validate-if-a-prompt-entry-is-a-number-in-js
    if (passwordLength < 8) {
      alert("That value is too low. Pick again.");
      var validAnswer = false;
    } else if (passwordLength > 128) {
      alert("That value is too high. Pick again.");
      var validAnswer = false;
    } else if (Number.isNaN(passwordLength)) { 
      alert("That is not a number.  Pick again.");
      var validAnswer = false;
    } else {
      var validAnswer = true;
    }
  } while (validAnswer === false);

  //ask for password criteria and will prompt again if no criteria is selected
  do {
    var criteria = [];
    criteria[0] = confirm("Select OK if you need to include lower case letters");
    criteria[1] = confirm("Select OK if you need to include upper case letters");
    criteria[2] = confirm("Select OK if you need to include numbers");
    criteria[3] = confirm("Select OK if you need to include special characters");
    if (criteria[0] || criteria[1] || criteria[2] || criteria[3]) {
      var goodCriteria = true;
    } else {
      alert("You have to pick at least one criteria");
      var goodCriteria = false;
    }
  } while (goodCriteria === false);

  //determine available characters using criteria from user input. available characters are stored in allPossibleCharac
  for (var i = 0; i < criteria.length; i++) {
    if (criteria[i]) {
      allPossibleCharac = allPossibleCharac + possibleCharac[i];
    }
  }

  //generates password
  var password = "";
  var x;
  for (var i = 0; i < passwordLength; i++) {
    x = Math.floor(Math.random() * allPossibleCharac.length); //generates random number between 0 and length of allowed characters
    password = password + allPossibleCharac[x];
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

