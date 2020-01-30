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

// const addOperatorSign = (sign) => {

//     operatorSign.innerText = ;
// }

// event listeners
numbersContainer.addEventListener('click', pushFirstNumber);
// operators.addEventListener('click', addOperatorSign);
numbersContainer.addEventListener('click', pushSecondNumber);
