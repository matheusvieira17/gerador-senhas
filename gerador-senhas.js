const charCode = String.fromCharCode;
const lettersInTheAlphabet = 26;

function getLowerLetter() {
  const initialLowerLetter = 97;
  const lowerMathFormula =
    Math.floor(Math.random() * lettersInTheAlphabet) + initialLowerLetter;
  return charCode(lowerMathFormula);
}

function getUpperLetter() {
  const initialUpperLetter = 65;
  const upperMathFormula =
    Math.floor(Math.random() * lettersInTheAlphabet) + initialUpperLetter;
  return charCode(upperMathFormula);
}

function getRandomNumber() {
  const initialNumber = 48;
  const numberMathFormula = Math.floor(Math.random() * 10);
  return charCode(numberMathFormula + initialNumber);
}

function getRandomSymbols() {
  const symbols = "(){}[]=<>/,.!@#$%&*+-,@";
  const randomSymbol = Math.random() * symbols.length;
  return symbols[Math.floor(randomSymbol)];
}

const passwordResult = document.querySelector("#password-result");
const lengthInput = document.querySelector("#length");
const numberInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const upperLetterInput = document.querySelector("#upperLetter");
const lowerLetterInput = document.querySelector("#lowerLetter");
const generateBtn = document.querySelector("#generate-btn");

const randomFunctions = {
  lower: getLowerLetter,
  upper: getUpperLetter,
  number: getRandomNumber,
  symbols: getRandomSymbols,
};

generateBtn.addEventListener("click", verifySettings);

function verifySettings() {
  const length = Number(lengthInput.value);
  const hasNumber = numberInput.checked;
  const hasSymbols = symbolsInput.checked;
  const hasUpper = upperLetterInput.checked;
  const hasLower = lowerLetterInput.checked;
  passwordResult.innerHTML = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbols,
    length
  );
}

function generatePassword(lower, upper, number, symbols, length) {
  const empty = "";
  let password = empty;
  const numberOfSettings = lower + upper + number + symbols;
  const arrayOfSettings = [{ lower }, { upper }, { number }, { symbols }];

  const checkedSettings = arrayOfSettings.filter(
    (setting) => Object.values(setting)[0]
  );

  if (numberOfSettings === 0) {
    return empty;
  } else {
    for (let counter = 0; counter < length; counter += numberOfSettings) {
      checkedSettings.forEach((setting) => {
        const nameOfTheFunctions = Object.keys(setting)[0];
        password += randomFunctions[nameOfTheFunctions]();
      });
    }

    const clipboardBtn = document.querySelector("#clipboard-btn");
    clipboardBtn.addEventListener("click", copyPassword);

    function copyPassword() {
      password = passwordResult.innerHTML;
      if (!password) {
        return;
      } else {
        navigator.clipboard.writeText(password);
      }
      alert(`Senha ${password} copiada`);
    }
  }

  const generatedPassword = password.slice(0, length);
  return generatedPassword;
}
