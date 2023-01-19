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
    const initialNumber = 48
    const numberMathFormula = Math.floor(Math.random() * 10)
    return charCode((numberMathFormula) + initialNumber)
}

function getRandomSymbols() {
  const symbols = "(){}[]=<>/,.!@#$%&*+-,@";
  const randomSymbol = Math.random() * symbols.length;
  return symbols[Math.floor(randomSymbol)];
}

const passwordResult = document.querySelector("#password-result");
const lengthLabel = document.querySelector("#length");
const numberLabel = document.querySelector("#numbers");
const symbolsLabel = document.querySelector("symbols");
const upperLetterLabel = document.querySelector("#upperLetter");
const lowerLetterLabel = document.querySelector("#lowerLetter");
const generateBtn = document.querySelector("#generate-btn");
