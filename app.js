const display = document.querySelector('.display');
const numbersContainer = document.querySelector('.numbers');
const zero = document.querySelector('.zero');

// operation display
let firstNumber = document.querySelector('.first-number');
let operatorSign = document.querySelector('.operator-sign');
let secondNumber = document.querySelector('.second-number');

// operatos signs
const operators = document.querySelector('.operators');

// result
const result = document.querySelector('.result');

// restart
const restart = document.querySelector('.restart');

// operation functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// negative
const negativeNumber = document.querySelector('.negative-number');
let whichNumber = 0;
const makeNegative = () => {
    if(whichNumber === 0){
        operationFirstNumber = parseFloat(operationFirstNumber, 10);
        if (operationFirstNumber) {
            operationFirstNumber *= -1;
            firstNumber.innerText = operationFirstNumber;
        } else {
            false;
        }
    } else if (whichNumber === 1) {
        operationSecondNumber = parseFloat(operationSecondNumber, 10);
        if (operationSecondNumber) {
            operationSecondNumber *= -1;
            secondNumber.innerText = operationSecondNumber;
        } else {
            false;
        }
    } else if (whichNumber === 2) {
        resultNumber = parseFloat(resultNumber, 10);
        if (resultNumber) {
            resultNumber *= -1;
        } else {
            false;
        }
    }
};

// functions
let operationFirstNumber = '';
const pushFirstNumber = number => {
    if (number.target === numbersContainer || number.target === restart) {
        false;
    } else {
        operationFirstNumber += number.target.innerText;
    }
    firstNumber.innerText = operationFirstNumber;
    negativeNumber.addEventListener('click', makeNegative);
    operators.addEventListener('click', addOperatorSign);
};

let operationSecondNumber = '';
const pushSecondNumber = number => {
    operators.removeEventListener('click', addOperatorSign);
    result.addEventListener('click', showResult);
    if (number.target === numbersContainer) {
        false;
    } else {
        operationSecondNumber += number.target.innerText;
    }
    secondNumber.innerText = operationSecondNumber;
    negativeNumber.addEventListener('click', makeNegative);
}

const addOperatorSign = sign => {
    negativeNumber.removeEventListener('click', makeNegative);
    if (sign.target === operators) {
        false;
    } else if (display.innerText) {
        operationSecondNumber = '';
        secondNumber.innerText = '';
        operationFirstNumber = display.innerText;
        firstNumber.innerText = display.innerText;
        display.innerText = '';
        resultNumber = 0;
        operatorSign.innerText = sign.target.innerText;
        numbersContainer.addEventListener('click', pushSecondNumber);
    } else {
        operatorSign.innerText = sign.target.innerText;
        numbersContainer.removeEventListener('click', pushFirstNumber);
        numbersContainer.addEventListener('click', pushSecondNumber);
    }
    operationFirstNumber = parseFloat(operationFirstNumber, 10);
    firstNumber.innerText = operationFirstNumber;
    whichNumber = 1;
};

let resultNumber = 0;
const showResult = () => {
    numbersContainer.removeEventListener('click', pushSecondNumber);
    operationSecondNumber = parseFloat(operationSecondNumber, 10);
    secondNumber.innerText = operationSecondNumber;

    if(operatorSign.innerText === '+'){
        resultNumber = add(operationFirstNumber, operationSecondNumber);
    }
    if(operatorSign.innerText === '-'){
        resultNumber = subtract(operationFirstNumber, operationSecondNumber);
    }
    if(operatorSign.innerText === '*'){
        resultNumber = multiply(operationFirstNumber, operationSecondNumber);
    }
    if(operatorSign.innerText === '/'){
        resultNumber = divide(operationFirstNumber, operationSecondNumber);
    }
    whichNumber = 1;
    display.innerText = resultNumber;
    negativeNumber.removeEventListener('click', makeNegative);
    operators.addEventListener('click', addOperatorSign);
};

const restartCalculator = () => {
    result.removeEventListener('click', showResult);
    numbersContainer.removeEventListener('click', pushSecondNumber);
    operators.removeEventListener('click', addOperatorSign);
    numbersContainer.addEventListener('click', pushFirstNumber);
    display.innerText = '';
    operationFirstNumber = '';
    firstNumber.innerText = '';
    operationSecondNumber = '';
    secondNumber.innerText = '';
    operatorSign.innerText = '';
    resultNumber = 0;
};

// event listeners
numbersContainer.addEventListener('click', pushFirstNumber);
restart.addEventListener('click', restartCalculator);