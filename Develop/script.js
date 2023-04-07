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

// lowerAlphabetExample[generatedLetterIndex];
function generatePassword() {
  let finalPassword = [];

  if (confirm("Do you want your password to contain lowercase letters?")) {
    builtArray = [...builtArray, ...lowerAlphabet];
    // console.log(builtArray);
  }
  if (confirm("Do you want your password to contain uppercase letters?")) {
    builtArray = [...builtArray, ...upperAlphabet];
    // console.log(builtArray);
  }
  if (confirm("Do you want your password to contain numbers?")) {
    builtArray = [...builtArray, ...numbers];
    // console.log(builtArray);
  }
  if (confirm("Do you want your password to contain special characters?")) {
    builtArray = [...builtArray, ...specialCharacters];
    // console.log(builtArray);
  }
  console.log(builtArray);

  let generatedLetterIndex = [];
  let passwordLength = prompt("How long do you want the password to be?");
  let password = "";

  if (passwordLength < 8 || passwordLength > 128) {
    alert(
      "Password must be at least 8 characters but no more than 128 characters"
    );
    return;
  }

  for (let i = 0; i < passwordLength; i++) {
    generatedLetterIndex.push(
      builtArray[Math.floor(Math.random() * builtArray.length)]
    );
  }

  console.log(generatedLetterIndex);
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
