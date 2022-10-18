// Assignment code here
function generatePassword() {
  // const passwordEl = document.getElementById('password')
  // passwordEl.addEventListener('input', syncCharacterAmount)
  //join the character arrays into strings
  //found this method of getting character arrays online
  const UPPERCASEletters = arrayFromLowToHigh(65, 90).join("");
  console.log(UPPERCASEletters);
  const LOWERCASEletters = arrayFromLowToHigh(97, 122).join("");
  const NUMBERletters = arrayFromLowToHigh(48, 57).join("");
  const SYMBOLletters = arrayFromLowToHigh(33, 47)
    .concat(arrayFromLowToHigh(58, 64))
    .concat(arrayFromLowToHigh(91, 96))
    .concat(123, 126).join("");

  //make list of every uppercase letter and lower case

  // var randomIndex = Math.floor(Math.random() * unsortedArray.length);
  // var randomValue = unsortedArray[randomIndex];
  var lengthofpassword = prompt("Length of Password");

  //use conditional to check if length of password is valid
  var uppercase = confirm("do you want uppercase letters?");
  var password = "password";
  var lowercase = confirm("do you want lowercase letters?");
  var numeric = confirm("do you want numerics?");
  var specialcharacters = confirm("do you want special characters?");
  console.log(
    lowercase,
    lengthofpassword,
    uppercase,
    specialcharacters,
    numeric
  );
  if (lengthofpassword < 8) {
    alert("password too small");
    return "password too small";
  }

  if (lengthofpassword > 128) {
    alert("password too large");
    return "password too large";
  }
  var chosenletters = "";
  if (specialcharacters) {
    chosenletters = chosenletters + SYMBOLletters;
  }

  if (uppercase) {
    chosenletters = chosenletters + UPPERCASEletters
  }
  if (numeric) {
    chosenletters = chosenletters + NUMBERletters
  }
  if (lowercase) {
    chosenletters = chosenletters + LOWERCASEletters
  }
  
  //TODO - write conditionals to include lowercase and numeric if user chose them


  //use conditionals for all users, concatination
  //loops and how to use math.random
  var unsortedArray = [];
  var total = chosenletters.length;
  for (var i = 0; i < lengthofpassword; i++) {
    var randomIndex = Math.floor(Math.random() * total);
    var randomValue = chosenletters[randomIndex];
    unsortedArray.push(randomValue);
  }
  var password = unsortedArray.join("");
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

// function generatePassword(characterAmount,includeUppercase,includeNumbers,includeSymbols) {
//   String.fromCharcode(65)
// }
function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    let char = String.fromCharCode(i);
    array.push(char);
  }
  return array;
}
