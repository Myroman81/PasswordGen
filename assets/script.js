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

// -- DataSet -- // 
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"]

function generatePassword() {

  // utilize a temp data object
  var tempPassword = "";


  var passwordLength = prompt("How long would you like your password to be?");


  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length of at least 8 characters and no more than 128 characters required!");

    //return;
  }

  console.log("Length: ", passwordLength);

  var upper = confirm("Would you like to use UPPER case characters in your password?");

  console.log("User Choice: ", upper);
  console.log("Type Choice: ", typeof upper);

  if (upper == true) {

    var upper = uppercase.length[Math.floor(Math.random() * 26)]
    console.log("upper: ", "random");

    //tempPassword = tempPassword + uppercase[random];
  }

  var lower = confirm("Would you like to use lower case characters in your password?");

  console.log("User Choice: ", lower);
  console.log("Type Choice: ", typeof lower);

  if (lower == true) {

    var lower = lowercase.length[Math.floor(Math.random() * 26)]
    console.log("lower:", "random");

    //tempPassword = tempPassword + lowercase[random];
  }

  var numbers = confirm("Would you like to use numbers in your password?");

  if (numbers = true) {

    var numbers = length[Math.floor(Math.random() * 10)]
    console.log("User Choice:", numbers);

    //tempPassword = tempPassword + numbers [random];
  }


  var specialChar = confirm("Would you like to use characters in your password?");

  if (specialChar = true) {

    var specialChar = length[Math.floor(Math.random() * 8)]
    console.log("User Choice:", specialChar);
    //tempPassword = tempPassword + characters[random];

  }
  return tempPassword;

}

// if (yes == true) {

//   var random = Math.floor(Math.random() * numbers.length);
//   console.log("Random: ", random);

//   tempPassword = tempPassword + numbers[random];
// }

// var characters = confirm("Would you like to use characters in your password?");

// console.log("User Choice: ", yes);
// console.log("Type Choice: ", no);

// if (yes == true) {

//   var random = Math.Floor(Math.random() * characters.length);
//   console.log("Random: ", random);

//   tempPassword = tempPassword + characters[random];
// }

// based on the LENGTH given by the user - HOW do we add more character to fill up our LENGTH(?)

