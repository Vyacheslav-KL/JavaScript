"use strict";

let vol1 = +prompt('Enter first number');
let vol2 = +prompt('Enter second number');
let operator = prompt('Enter one operation from ["+" "-" "*" "/"]');

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case "+":
            alert(summa(arg1, arg2));
            break;
        case "-":
            alert(subtraction(arg1, arg2));
            break;
        case "*":
            alert(multiplication(arg1, arg2));
            break;
        case "/":
            alert(division(arg1, arg2));
    }
}
mathOperation(vol1, vol2, operator);