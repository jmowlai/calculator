const add = function (a, b) {
    return Math.round(((a + b) + Number.EPSILON) * 1000) / 1000;
};

const subtract = function (a, b) {
    return Math.round(((a - b) + Number.EPSILON) * 1000) / 1000;
};

const multiply = function (a, b) {
    return Math.round(((a * b) + Number.EPSILON) * 1000) / 1000;
};

const divide = function (a, b) {
    return b != 0 ? Math.round(((a/b) + Number.EPSILON) * 1000) / 1000 : NaN;
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
var displayCache = document.getElementById('displayCache');
var cache = undefined;
var secondNum = undefined;
var operator = undefined;

const arithButtons = document.querySelectorAll('button.arithButton');
const oppButtons = document.querySelectorAll('button.oppButton');
const equalButton = document.querySelectorAll('button.equalButton');
const allClearButton = document.querySelectorAll('button.allClearButton');
const clearButton = document.querySelectorAll('button.clearButton');
const changeSignButton = document.querySelectorAll('button.changeSignButton');
const decimalButton = document.querySelectorAll('button.decimalButton');
const deleteButton = document.querySelectorAll('button.deleteButton');

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
        displayCache.textContent = operate(operator, Number(displayCache.textContent), Number(display.textContent));
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
        changeSign();
    })
})

decimalButton.forEach((button) => {
    button.addEventListener('click', () => {
        addDecimal();
    })
})

deleteButton.forEach((button) => {
    button.addEventListener('click', () => {
        deleteChar();
    })
})

function deleteChar() {
    display.textContent = display.textContent.slice(0, -1);
}

function addDecimal() {
    if (!(/\./i.test(display.textContent))) {
        display.textContent += '.';
    }
    else if (/\.$/.test(display.textContent)) {
        display.textContent = display.textContent.replace(/\.$/gi, "");
    };
}

function changeSign() {
    if (/-\w*/i.test(display.textContent)) {
        display.textContent = display.textContent.replace(/^-/gi, "");
    }
    else {
        display.textContent = "-"+display.textContent;
    }
}

function appendDisplay(e) {
    display.textContent += e;
}

function operateButton(button) {
    if (!displayCache.textContent) { 
        operator = button.value;
        displayCache.textContent = Number(display.textContent);
        display.textContent = undefined;
    }
    else if (!operator) {
        if (!(button.value == '/' || button.value == '*')) {
            cache = Number(operate(button.value, Number(displayCache.textContent), Number(display.textContent)));
            operator = button.value;
            display.textContent = undefined;
            displayCache.textContent = cache;
        }
        else {
            operator = button.value;
        }
    }
    else {
        cache = Number(operate(operator, Number(displayCache.textContent), Number(display.textContent)));
        operator = button.value;
        display.textContent = undefined;
        displayCache.textContent = cache;
    }
}

function allClear() {
    display.textContent = undefined;
    displayCache.textContent = undefined;
    operator = undefined;
} 

function clear () {
    display.textContent = undefined;
    operator = undefined;
}