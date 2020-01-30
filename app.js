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
let operationFirstNumber = '';
const pushFirstNumber = number => {
    if (number.target === numbersContainer || number.target === restart) {
        false;
    } else {
        operationFirstNumber += number.target.innerText;
    }
    firstNumber.innerText = operationFirstNumber;
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
    operationFirstNumber = parseFloat(operationFirstNumber, 10);
    operationSecondNumber = parseFloat(operationSecondNumber, 10);

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