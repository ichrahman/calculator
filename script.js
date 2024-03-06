const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const deleteOne = document.querySelector('.delete');
const decimalPoint = document.querySelector('.decimalPoint');
const equalsButton = document.querySelector('.equalsButton');

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')

let firstNumber;
let secondNumber;
let operator;
let flag = false;

// clear display
clear.addEventListener('click', () => {
    display.textContent = "";
})


numberButtons.forEach(button => button.addEventListener('click', () => {
    if (flag) {
        display.textContent = '';
        flag = !flag;
    }
    display.textContent += button.textContent;

}))

function operate(firstNumber, secondNumber, operator) {
    let result;
    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case 'x':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        default:
            result = "Error: Invalid operator";
    }

    return result;
}


operatorButtons.forEach(button => button.addEventListener('click', () => {
    flag = !flag;
    operator = button.textContent;
    firstNumber = parseFloat(display.textContent);
}))

equalsButton.addEventListener('click', () => {
    secondNumber = parseFloat(display.textContent);
    let result = operate(firstNumber, secondNumber, operator);
    display.textContent = result;
})