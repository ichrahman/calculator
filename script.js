const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const deleteOne = document.querySelector('.delete');
const decimalPoint = document.querySelector('.decimalPoint');
const equalsButton = document.querySelector('.equalsButton');

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')


numberButtons.forEach(button => button.addEventListener('click', () => {
    display.textContent += button.textContent;
}))