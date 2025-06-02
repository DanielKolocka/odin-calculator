let firstNum = null;
let secondNum = null;
let operator = null;
let result = null;
let subsequentNum = null;

let isFirstNum = true;
let isSecondNum = false;
let equalsPressed = false;

const display = document.querySelector(".displayText");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");

numberButtons.forEach((item) => {
    item.addEventListener("click", (item) => {
        if (equalsPressed) {
            clean()
        }
        // console.log(item.target.innerText);
        display.innerText += item.target.innerText;
    });
});

operatorButtons.forEach((item) => {
    item.addEventListener("click", (item) => {
        // console.log(item.target.innerText);
        if (item.target.innerText == "AC") {
          clean();
        }
        
        else if (isFirstNum) {
            firstNum = display.innerText;
            display.innerText = "";
            operator = item.target.innerText;
            isSecondNum = true;
        }
        else if (isSecondNum) {
            display.innerText = "";
            operator = item.target.innerText;
            equalsPressed = false;
            subsequentNum = null;
        }
    

    });
});

equalsButton.addEventListener("click", (item) => {
    equalsPressed = true;
    if (isFirstNum && isSecondNum) {
        secondNum = display.innerText;
        result = operate(operator, firstNum, secondNum);
        display.innerText = result;
        isFirstNum = false;
        
    }

    else if (isSecondNum && !isFirstNum) {
        subsequentNum = display.innerText;
        result = operate(operator, result, subsequentNum);
        display.innerText = result;
        
    }
    // console.log("Result = " + result);
});

function add(a, b) {
    return (a+b).toString();
}

function subtract(a,b) {
    return (a-b).toString();
}

function multiply(a,b) {
    return (a*b).toString();
}

function divide(a,b) {
    if (b == 0) {
        return "Divide by 0??";
    }
    return (a/b).toString();
}

function operate(op, num1, num2) {
    const firstNumber = parseInt(num1);
    const secondNumber = parseInt(num2);
    switch (op) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);

        case "*":
            return multiply(firstNumber, secondNumber);

        case "/":
            return divide(firstNumber, secondNumber);
    }
}

function clean() {
    firstNum = null;
    secondNum = null;
    subsequentNum = null;
    result = null;
    isFirstNum = true;
    isSecondNum = false;
    equalsPressed = false;
    display.innerText = "";
    // console.log("Clean Called");
}
