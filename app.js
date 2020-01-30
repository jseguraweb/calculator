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

// functions
let operationFirstNumber = 0;
const pushFirstNumber = number => {
    if (number.target === numbersContainer) {
        false;
    } else {
        operationFirstNumber += number.target.innerText;
    }
    firstNumber.innerText = parseInt(operationFirstNumber, 10);
    operators.addEventListener('click', addOperatorSign);
};

let operationSecondNumber = 0;
const pushSecondNumber = number => {
    operators.removeEventListener('click', addOperatorSign);
    result.addEventListener('click', showResult);
    if (number.target === numbersContainer) {
        false;
    } else {
        operationSecondNumber += number.target.innerText;
    }
    secondNumber.innerText = parseInt(operationSecondNumber, 10);
}

const addOperatorSign = sign => {
 if (sign.target === operators) {
        false;
    } else {
        operatorSign.innerText = sign.target.innerText;
        numbersContainer.removeEventListener('click', pushFirstNumber);
        numbersContainer.addEventListener('click', pushSecondNumber);
    }
};

let resultNumber = 0;
const showResult = () => {
    numbersContainer.removeEventListener('click', pushSecondNumber);
    operationFirstNumber = parseInt(operationFirstNumber, 10);
    operationSecondNumber = parseInt(operationSecondNumber, 10);

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
    display.innerText = resultNumber;
};

const restartCalculator = () => {
    result.removeEventListener('click', showResult);
    numbersContainer.removeEventListener('click', pushSecondNumber);
    operators.removeEventListener('click', addOperatorSign);
    numbersContainer.addEventListener('click', pushFirstNumber);
    display.innerText = '';
    firstNumber.innerText = '';
    operationFirstNumber = 0;
    secondNumber.innerText = '';
    operationSecondNumber = 0;
    operatorSign.innerText = '';
    resultNumber = 0;
    console.log(operatorSign.innerText);
}

// event listeners
numbersContainer.addEventListener('click', pushFirstNumber);
restart.addEventListener('click', restartCalculator);