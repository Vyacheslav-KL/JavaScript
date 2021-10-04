"use strict";

function summa(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2
}

function division(num1, num2) {
    if (num2 === 0) {
        return "Error: division by zero"
    } else {
        return num1 / num2;
    }
}