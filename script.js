const inputDisplay = document.querySelector(".numDisplay");
const operatorDisplay = document.querySelector(".operatorDisplay");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const dot = document.querySelector(".dot");
const reset = document.querySelector(".reset");
const clear = document.querySelector(".delete");
let displayValue = 0;
let firstNum = "";
let secondNum = "";
let operator = "";

function add(firstNum, secondNum) {
  console.log(firstNum + secondNum);
}
function subtract(firstNum, secondNum) {
  console.log(firstNum - secondNum);
}
function multiply() {}
function divide() {}

function operate() {}
add(1, 2);
subtract(10, 3);
