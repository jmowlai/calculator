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
const allClearButton = document.querySelectorAll('button.allClearButton');
const clearButton = document.querySelectorAll('button.clearButton');
const changeSignButton = document.querySelectorAll('button.changeSignButton');

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

allClearButton.forEach((button) => {
    button.addEventListener('click', () => {
        allClear();
    })
})

clearButton.forEach((button) => {
    button.addEventListener('click', () => {
        clear();
    })
})

changeSignButton.forEach((button) => {
    button.addEventListener('click', () => {
        if (/-\w*/i.test(display.textContent)) {
            display.textContent = display.textContent.replace(/^-/gi, "");
        }
        else {
            display.textContent = "-"+display.textContent;
        }
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
        if (button.value != '/') {
            firstNum = Number(operate(button.value, Number(displayFirstNum.textContent), Number(display.textContent)));
            operator = button.value;
            display.textContent = undefined;
            displayFirstNum.textContent = firstNum;
        }
        else {
            operator = button.value;
        }
    }
    else {
        firstNum = Number(operate(operator, Number(displayFirstNum.textContent), Number(display.textContent)));
        operator = button.value;
        display.textContent = undefined;
        displayFirstNum.textContent = firstNum;
    }
}

function allClear() {
    display.textContent = undefined;
    displayFirstNum.textContent = undefined;
    operator = undefined;
} 

function clear () {
    display.textContent = undefined;
    operator = undefined;
}