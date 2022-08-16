// Assignment code STARTS here

// Variables that the user is going to need
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Defining password variables and their values
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = []; // This is necessary for the uppercase conversion

// Choices for the user
var choices;

// lowercase to uppercase conversion
// How does it know what to do with this??
var toUpper = function(x) {
  return x.toUpperCase();
};

// variable for uppercase conversion
alpha2 = alpha.map(toUpper);

//Reference to the #generate ID button element
var get = document.querySelector("#generate");


// I do not understand what this is doing???
get.addEventListener("click", function (){
    ps = generatePassword();
    document.getElementById("Password").placeholder = ps;
});




=============================
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword () {
  enter = parseInt(promt("How many characters would you like your password? Choose between 8 and 128."))
}