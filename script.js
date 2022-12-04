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
var firstNum = undefined;
var secondNum = undefined;
var operator = undefined;

const arithButtons = document.querySelectorAll('button.arithButton');
const oppButtons = document.querySelectorAll('button.oppButton');
const equalButton = document.querySelectorAll('button.equalButton');
const clearButton = document.querySelectorAll('button.clearButton');

arithButtons.forEach((button) => {
    button.addEventListener('click', () => {
        appendDisplay(button.value);
    });
});

oppButtons.forEach((button) => {
    button.addEventListener('click', () => {
        operateButton(button);
    })
});

equalButton.forEach((button) => {
    button.addEventListener('click', () => {
        displayFirstNum.textContent = operate(operator, Number(displayFirstNum.textContent), Number(display.textContent));
        display.textContent = undefined;
        operator = undefined;
    })
})

clearButton.forEach((button) => {
    button.addEventListener('click', () => {
        clear();
    })
})

function appendDisplay(e) {
    display.textContent += e;
}

function operateButton(button) {
    if (!displayFirstNum.textContent) { 
        operator = button.value;
        displayFirstNum.textContent = Number(display.textContent);
        display.textContent = undefined;
    }
    else if (!operator) {
        firstNum = Number(operate(button.value, Number(displayFirstNum.textContent), Number(display.textContent)));
        operator = button.value;
        display.textContent = undefined;
        displayFirstNum.textContent = firstNum;
    }
    else {
        firstNum = Number(operate(operator, Number(displayFirstNum.textContent), Number(display.textContent)));
        operator = button.value;
        display.textContent = undefined;
        displayFirstNum.textContent = firstNum;
    }
}

function clear() {
    display.textContent = undefined;
    displayFirstNum.textContent = undefined;
    operator = undefined;
} 
