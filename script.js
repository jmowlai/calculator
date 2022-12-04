const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return b != 0 ? a/b : NaN;
};

const operate = function (func, a, b) {
    if (func == "+") {
        return add(a, b);
    }
    else if (func == "-") {
        return subtract(a, b);
    }
    else if (func == "*") {
        return multiply(a, b);
    }
    else if (func == "/") {
        return divide(a, b);
    }
};

var display = document.getElementById('display');
var displayFirstNum = document.getElementById('displayFirstNum');
var firstNum = null;
var secondNum = null;
var operator = null;

const arithButtons = document.querySelectorAll('button.arithButton');
const oppButtons = document.querySelectorAll('button.oppButton');
const equalButton = document.querySelectorAll('button.equalButton');
const clearButton = document.querySelectorAll('button.clearButton');

arithButtons.forEach((button) => {
    button.addEventListener('click', () => {
        appendDisplay(button.value);
    });
});

function appendDisplay(e) {
    display.textContent += e;
}

oppButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (!displayFirstNum.textContent) { 
            operator = button.value;
            displayFirstNum.textContent = Number(display.textContent);
            display.textContent = undefined;
        }
        else {
            firstNum = Number(operate(operator, Number(displayFirstNum.textContent), Number(display.textContent)));
            operator = button.value;
            display.textContent = undefined;
            displayFirstNum.textContent = firstNum;
        }
    })
});

clearButton.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent = undefined;
        displayFirstNum.textContent = undefined;
        operator = undefined;
    })
})