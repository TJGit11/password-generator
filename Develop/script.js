// Assignment Code
var generateBtn = document.querySelector("#generate");
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let lowerAlphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let upperAlphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

let builtArray = [];

// let builtArray = [...upperAlphabet, ...numbers];
// let generatedLetterIndex = Math.floor(Math.random() * builtArray.length);

// let builtArray = [...builtArray, ...numbers];

// start at empty let builtArray = [] - > empty array
// do you want numbers? let builtArray = [...builtArray, ...numbers] -> empty builtArray + numbers
// do you want numbers and lowercase letters? [...builtArray, ...lowerAlphabet] -> builtArray gained numbers previously and now has lower case alphabet joined
// do you want numbers and lowercase and uppercase? [...builtArray, upperAlphabet] -> builtArray gained lowercase & numbers previously and is now joined with upper case alphabet

lowerAlphabetExample[generatedLetterIndex];
function generatePassword() {
  if (confirm("Do you want your password to contain lowercase letters?")) {
    builtArray = [...builtArray, ...lowerAlphabet];
  }
  if (confirm("Do you want your password to contain uppercase letters?")) {
    builtArray = [...builtArray, upperAlphabet];
  }
  if (confirm("Do you want your password to contain numbers?")) {
    builtArray = [...builtArray, ...numbers];
  }
  if (confirm("Do you want your password to contain special characters?")) {
    builtArray = [...builtArray, ...specialCharacters];
  }

  let passwordLength = prompt("how long do you want the password?");
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += builtArray[index];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
