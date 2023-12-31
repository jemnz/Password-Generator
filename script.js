// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  const passwordLength = prompt('Please enter the length of the password (between 8 and 128 characters):');

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert('Please enter a valid password length between 8 and 128 characters.');
    return getPasswordOptions();
  }

  const addLowercase = confirm('Include lowercase characters?');
  const addUppercase = confirm('Include uppercase characters?');
  const addNumeric = confirm('Include numeric characters?');
  const addSpecial = confirm('Include special characters?');

  if (!addLowercase && !addUppercase && !addNumeric && !addSpecial) {
    alert('At least one character type should be selected. Please try again.');
    return getPasswordOptions();
  }

  return {
    length: passwordLength,
    addLowercase,
    addUppercase,
    addNumeric,
    addSpecial,
  };

}

// Function for getting a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}


// Function to generate password with user input
function generatePassword() {
  const options = getPasswordOptions();

  if (options) {
    let characters = '';

    if (options.addLowercase) {
      for (let i = 0; i < lowerCasedCharacters.length; i++) {
        characters += lowerCasedCharacters[i];
      }
    }

    if (options.addUppercase) {
      for (let i = 0; i < upperCasedCharacters.length; i++) {
        characters += upperCasedCharacters[i];
      }
    }

    if (options.addNumeric) {
      for (let i = 0; i < numericCharacters.length; i++) {
        characters += numericCharacters[i];
      }
    }

    if (options.addSpecial) {
      for (let i = 0; i < specialCharacters.length; i++) {
        characters += specialCharacters[i];
      }
    }

    let password = '';
    for (let i = 0; i < options.length; i++) {
      password += getRandom(characters);
    }

    return password;
  }
}
    

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);