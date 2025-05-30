let firstNum;
let secondNum;
let operator;

function add(a, b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    if (b == 0) {
        return null;
    }
    return a/b;
}

function operate(op, num1, num2) {
    switch (op) {
        case "+":
            console.log("add");
            return add(num1, num2);
        case "-":
            console.log("subtract")
            return subtract(num1, num2);

        case "*":
            console.log("Multiply");
            return multiply(num1, num2);

        case "/":
            console.log("Divide");
            return divide(num1, num2);
    }
}
