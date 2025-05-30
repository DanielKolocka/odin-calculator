let firstNum = null;
let secondNum = null;
let operator = null;

const display = document.querySelector(".displayText");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");

numberButtons.forEach((item) => {
    item.addEventListener("click", (item) => {
        console.log(item.target.innerText);
        display.innerText += item.target.innerText;
    });
});

operatorButtons.forEach((item) => {
    item.addEventListener("click", (item) => {
        console.log(item.target.innerText);
        if (firstNum == null) {
            firstNum = display.innerText;
            display.innerText = "";
            operator = item.target.innerText;
        }
        // else {
        //     secondNum = display.innerText;
        //     display.innerText = operate(operator, firstNum. secondNum);
        // }

    });
});

equalsButton.addEventListener("click", (item) => {
    secondNum = display.innerText;
    // console.log(secondNum + " " + firstNum);
    // console.log(firstNum+secondNum);
    // operate(operator, firstNum. secondNum);
    display.innerText = operate(operator, firstNum, secondNum);
    // console.log(operate(operator, firstNum. secondNum));
    // display.innerText = operate(operator, firstNum. secondNum);
});

function add(a, b) {
    return (a+b).toString();
}

function subtract(a,b) {
    return a-b.toString();
}

function multiply(a,b) {
    return a*b.toString();
}

function divide(a,b) {
    if (b == 0) {
        return null;
    }
    return a/b.toString();
}

function operate(op, num1, num2) {
    const firstNumber = parseInt(num1);
    const secondNumber = parseInt(num2);
    switch (op) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            console.log("subtract")
            return subtract(firstNumber, secondNumber);

        case "*":
            console.log("Multiply");
            return multiply(firstNumber, secondNumber);

        case "/":
            console.log("Divide");
            return divide(firstNumber, secondNumber);
        case "AC":
            firstNum = null;
            secondNum = null;
            display.innerText = "";
    }
}
