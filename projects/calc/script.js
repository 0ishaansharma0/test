let firstNumber = "";
let secondNumber = "";
let operator = "";
let justCalculated = false;



function add(firstNumber,secondNumber){
    return firstNumber + secondNumber;
}
function subtract(firstNumber,secondNumber){
    return firstNumber-secondNumber;
}

function multiply(firstNumber,secondNumber){
    return firstNumber*secondNumber;
}


function divide(firstNumber,secondNumber){
    if (secondNumber === 0){
        return "Can't divide by 0";
    }
    return firstNumber/secondNumber;
}



function operate(firstNumber, operator, secondNumber){
    if (operator === "+"){
        return add(firstNumber,secondNumber);
    }
    else if(operator === "-"){
        return subtract(firstNumber,secondNumber);
    }
    else if(operator === "*"){
        return multiply(firstNumber,secondNumber);
    }
    else if(operator === "/"){
        return divide(firstNumber,secondNumber);
    }
    else {
        return alert("Invalid operator...")
    }
}



const display = document.querySelector(".display");

function inputDigit(digit){
    if (justCalculated) {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        justCalculated = false;
    }

    if (operator === ""){
        firstNumber += digit;
        display.textContent = firstNumber;
    }
    else {
        secondNumber += digit;
        display.textContent = secondNumber;
    }
    
}


const digitButtons = document.querySelectorAll(".digits");
digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        inputDigit(button.textContent);
    });
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => {

    button.addEventListener("click", () => {

        handleOperator(button.textContent);
    });

});
function calculate() {

    if (firstNumber === "" || secondNumber === "" || operator === "") {
        return;
    }

    const result = operate(
        Number(firstNumber),
        operator,
        Number(secondNumber)
    );

    display.textContent = Number(result.toFixed(10));
    firstNumber = String(result);
    secondNumber = "";
    justCalculated = true;
}

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", () => {
    calculate();
});


const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    clear();
})

function inputDecimal(){
    if (operator === ""){
        if (!firstNumber.includes(".")){
            firstNumber += ".";
            display.textContent = firstNumber;
        }
    } else {
        if (!secondNumber.includes(".")){
            secondNumber += ".";
            display.textContent = secondNumber;
        }
    }
}

const decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener("click", () => {
    inputDecimal();
});

const backspaceButton = document.querySelector(".backspace");

function backspace(){
    if (operator === ""){
        firstNumber = firstNumber.slice(0, -1);    }
    else {
        secondNumber = secondNumber.slice(0, -1);
    }
    display.textContent = operator === "" ? firstNumber : secondNumber;
}

backspaceButton.addEventListener("click", () => {
    backspace();
});


function handleOperator(newOperator) {

    if (firstNumber === "") {
        return;
    }

    if (secondNumber !== "") {
        calculate();
    }

    operator = newOperator;
    justCalculated = false;
}

document.addEventListener("keydown", (event) => {
    if (event.key >= "0" && event.key <= "9"){
        inputDigit(event.key);
    }
    else if (event.key === "."){
        inputDecimal();
    } 
    else if (["+", "-", "*", "/"].includes(event.key)) {
    handleOperator(event.key);
    }
    else if (event.key === "Enter"){
        calculate();
    }
    else if (event.key === "Backspace"){
        backspace();
    }
    else if (event.key === "Escape"){
        clear();
    }
});

function clear() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    justCalculated = false;

    display.textContent = "0";
}

