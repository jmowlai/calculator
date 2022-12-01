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
var firstNum = null;
var secondNum = null;
var operator = null;

const arithButtons = document.querySelectorAll('button.arithButton');
const oppButtons = document.querySelectorAll('button.oppButton');

arithButtons.forEach((button) => {
    button.addEventListener('click', () => {
        appendDisplay(button.value);
    });
});

function appendDisplay(e) {
    display.textContent += e;
    console.log(e)
}

oppButtons.forEach((button) => {
    button.addEventListener('click', () => {
        firstNum = Number(display.textContent);
        operator = button.value;
        console.log(firstNum);
        console.log(button.value);
    })
})