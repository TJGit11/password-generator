// Assignment Code
var generateBtn = document.querySelector("#generate");

// place all possible numbers in an array & assign to a variable
let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// place all possible lower case letters in an array & assign to a variable
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

// place all possible upper case letters in an array & assign to a variable
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

// place all possible special characters in an array & assign to a variable
let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// begin the builtArray empty & update value as the code runs

function generatePassword() {
  let builtArray = [];
  // if confirmed, builtArray now contains all letters in lowerAlphabet. If not, then they are not incldued
  if (confirm("Do you want your password to contain lowercase letters?")) {
    builtArray = [...builtArray, ...lowerAlphabet];
  }

  // if confirmed, builtArray now contains all letters in upperAlphabet
  if (confirm("Do you want your password to contain uppercase letters?")) {
    builtArray = [...builtArray, ...upperAlphabet];
  }
  // if confirmed, builtArray now contains all numbers in numbersArray
  if (confirm("Do you want your password to contain numbers?")) {
    builtArray = [...builtArray, ...numbersArray];
  }
  // if confirm, builtArray now contains all special characters in specialCharacters
  if (confirm("Do you want your password to contain special characters?")) {
    builtArray = [...builtArray, ...specialCharacters];
  }

  // start with empty array to store received values
  let generatedLetterIndex = [];

  // prompt input decides the length of the password
  let passwordLength = prompt("How long do you want the password to be?");

  // min password length is 8, max is 128
  if (passwordLength < 8 || passwordLength > 128) {
    alert(
      "Password must be at least 8 characters but no more than 128 characters"
    );
    return;
  }

  // randomly choose values from the builtArray
  // continue x times based on passwordLength value
  // push values into the generatedLetterIndex array
  for (let i = 0; i < passwordLength; i++) {
    generatedLetterIndex.push(
      builtArray[Math.floor(Math.random() * builtArray.length)]
    );
  }

  // return contents of the array as a string
  return generatedLetterIndex.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
