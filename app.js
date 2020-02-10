const display = document.querySelector('.display');
const numbersContainer = document.querySelector('.numbers');
const zero = document.querySelector('.zero');

// operation display
let firstNumber = document.querySelector('.first-number');
let operatorSign = document.querySelector('.operator-sign');
let secondNumber = document.querySelector('.second-number');

// operators signs
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
};

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
        window.addEventListener('keydown', keySecondNumber);
    } else {
        operatorSign.innerText = sign.target.innerText;
        numbersContainer.removeEventListener('click', pushFirstNumber);
        window.removeEventListener('keydown', keyFirstNumber);
        numbersContainer.addEventListener('click', pushSecondNumber);
        window.addEventListener('keydown', keySecondNumber);
    }
    operationFirstNumber = parseFloat(operationFirstNumber, 10);
    firstNumber.innerText = operationFirstNumber;
    whichNumber = 1;
};

let resultNumber = 0;
const showResult = () => {
    numbersContainer.removeEventListener('click', pushSecondNumber);
    window.removeEventListener('keydown', keySecondNumber);
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
    window.removeEventListener('keydown', keyFirstNumber);
    operators.removeEventListener('click', addOperatorSign);
    negativeNumber.removeEventListener('click', makeNegative);
    numbersContainer.addEventListener('click', pushFirstNumber);
    window.addEventListener('keydown', keyFirstNumber);
    whichNumber = 0;
    resultNumber = 0;
    operationFirstNumber = '';
    operationSecondNumber = '';
    display.innerText = '';
    firstNumber.innerText = '';
    secondNumber.innerText = '';
    operatorSign.innerText = '';
};

// numbers
let key;
const keyFirstNumber = keyStroke => {
    negativeNumber.addEventListener('click', makeNegative);
    operators.addEventListener('click', addOperatorSign);
    switch (keyStroke.keyCode) {
        case 48:
            key = '0';
            operationFirstNumber += key;
            firstNumber.innerText = operationFirstNumber;
            break;
        case 49:
            key = '1';
            operationFirstNumber += key;
            firstNumber.innerText = operationFirstNumber;
            break;
        case 50:
            key = '2';
            operationFirstNumber += key;
            firstNumber.innerText = operationFirstNumber;
            break;
        case 51:
            key = '3';
            operationFirstNumber += key;
            firstNumber.innerText = operationFirstNumber;
            break;
        case 52:
            key = '4';
            operationFirstNumber += key;
            firstNumber.innerText = operationFirstNumber;
            break;
        case 53:
            key = '5';
            operationFirstNumber += key;
            firstNumber.innerText = operationFirstNumber;
            break;
        case 54:
            key = '6';
            operationFirstNumber += key;
            firstNumber.innerText = operationFirstNumber;
            break;
        case 55:
            key = '7';
            operationFirstNumber += key;
            firstNumber.innerText = operationFirstNumber;
            break;
        case 56:
            key = '8';
            operationFirstNumber += key;
            firstNumber.innerText = operationFirstNumber;
            break;
        case 57:
            key = '9';
            operationFirstNumber += key;
            firstNumber.innerText = operationFirstNumber;
            break;
        case 190:
            key = '.';
            operationFirstNumber += key;
            firstNumber.innerText = operationFirstNumber;
            break;
        case 13:
            showResult();
            break;
        default:
            key = '';
    }
};

const keySecondNumber = keyStroke => {
    negativeNumber.addEventListener('click', makeNegative);
    operators.removeEventListener('click', addOperatorSign);
    result.addEventListener('click', showResult);
    switch (keyStroke.keyCode) {
        case 48:
            key = '0';
            operationSecondNumber += key;
            secondNumber.innerText = operationSecondNumber;
            break;
        case 49:
            key = '1';
            operationSecondNumber += key;
            secondNumber.innerText = operationSecondNumber;
            break;
        case 50:
            key = '2';
            operationSecondNumber += key;
            secondNumber.innerText = operationSecondNumber;
            break;
        case 51:
            key = '3';
            operationSecondNumber += key;
            secondNumber.innerText = operationSecondNumber;
            break;
        case 52:
            key = '4';
            operationSecondNumber += key;
            secondNumber.innerText = operationSecondNumber;
            break;
        case 53:
            key = '5';
            operationSecondNumber += key;
            secondNumber.innerText = operationSecondNumber;
            break;
        case 54:
            key = '6';
            operationSecondNumber += key;
            secondNumber.innerText = operationSecondNumber;
            break;
        case 55:
            key = '7';
            operationSecondNumber += key;
            secondNumber.innerText = operationSecondNumber;
            break;
        case 56:
            key = '8';
            operationSecondNumber += key;
            secondNumber.innerText = operationSecondNumber;
            break;
        case 57:
            key = '9';
            operationSecondNumber += key;
            secondNumber.innerText = operationSecondNumber;
            break;
        case 190:
            key = '.';
            operationSecondNumber += key;
            secondNumber.innerText = operationSecondNumber;
            break;
        case 13:
            showResult();
            break;
        default:
            key = '';
    }
};

// event listeners
numbersContainer.addEventListener('click', pushFirstNumber);
restart.addEventListener('click', restartCalculator);
window.addEventListener('keydown', keyFirstNumber);
