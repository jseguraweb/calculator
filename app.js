const display = document.querySelector('.display');
const numbersContainer = document.querySelector('.numbers');
const zero = document.querySelector('.zero');

// operation display
const firstNumber = document.querySelector('.first-number');
const operatorSign = document.querySelector('.operator-sign');
const secondNumber = document.querySelector('.second-number');

// operatos signs
const operators = document.querySelector('.operators');

// functions
const firstNumberArray = [];
const pushFirstNumber = (number) => {
    if (number.target === numbersContainer) {
        false;
    } else {
        firstNumberArray.push(number.target.innerText);
    }
    const firstArrayOfNumbers = parseInt(firstNumberArray.join(''));
    firstNumber.innerText = firstArrayOfNumbers;
    console.log(firstArrayOfNumbers);
    numbersContainer.removeEventListener('click', pushSecondNumber);
}

const secondNumberArray = [];
const pushSecondNumber = (number) => {
    if (number.target === numbersContainer) {
        false;
    } else {
        secondNumberArray.push(number.target.innerText);
    }
    const secondArrayOfNumbers = parseInt(secondNumberArray.join(''));
    secondNumber.innerText = secondArrayOfNumbers;
    console.log(secondArrayOfNumbers);
}

const addOperatorSign = (sign) => {
 if (sign.target === operators) {
        false;
    } else {
        operatorSign.innerText = sign.target.innerText;
        numbersContainer.removeEventListener('click', pushFirstNumber);
        numbersContainer.addEventListener('click', pushSecondNumber);
    }
    console.log(operatorSign);
}

// event listeners
numbersContainer.addEventListener('click', pushFirstNumber);
operators.addEventListener('click', addOperatorSign);

