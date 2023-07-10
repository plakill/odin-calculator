function add(a, b) {
    return a+b;
}
function subtract(a, b) {
    return a-b;
}
function multiply(a, b) {
    return a*b;
}
function divide(a, b) {
    return b == 0 ? null : a/b;
}

let operator = "";
let firstNumber = 0;
let secondNumber = 0;

function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "x":
            return multiply(firstNumber, secondNumber);
        case "÷":
            return divide(firstNumber, secondNumber);
    }
}

const display = document.querySelector(".display")
const buttons = document.querySelectorAll(".numberButtons button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {display.textContent += button.textContent});
});

const operatorButtons = document.querySelectorAll(".operationButtons *");
operatorButtons.forEach((operatorButton) => {
    if (operatorButton.className != "equals") {
        operatorButton.addEventListener("click", () => {
            firstNumber = parseInt(display.textContent);
            operator = operatorButton.textContent;
            display.textContent = firstNumber + operator;
        });
    }
});

const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", () => {
    let displayLenght = display.textContent.length;
    let displayContent = display.textContent;
    secondNumber = displayContent.slice(displayContent.indexOf(operator) + 1, displayLenght +1);
    secondNumber = parseInt(secondNumber);
    display.textContent = operate(operator, firstNumber, secondNumber);
});

const clearButton = document.querySelector("button.clear");
clearButton.addEventListener("click", () => {
    display.textContent = "";
});

const deleteButton = document.querySelector("button.delete");
deleteButton.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1);
});