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
  inputDisplay.textContent = parseInt(firstNum) + parseInt(secondNum);
}
function subtract(firstNum, secondNum) {
  return firstNum - secondNum;
}
function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}
function divide(firstNum, secondNum) {
  return firstNum / secondNum;
}

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (operator === "") {
      // Read first number if no operator set
      firstNum += e.target.innerText;
      inputDisplay.textContent = firstNum;
    } else {
      // if operator does not equal empty string read second number
      secondNum += e.target.innerText;
      inputDisplay.textContent = secondNum;
    }
  });
});

operators.forEach((op) => {
  op.addEventListener("click", (e) => {
    if (e.target.innerText !== "=") {
      // if selected button is not the "=" record operator selected
      operator = e.target.innerText;
      //if selected button is "=" pass the values to the function
    } else {
      operate(firstNum, secondNum, operator);
    }
  });
});

function operate(firstNum, secondNum, operatorSymbol) {
  if (operatorSymbol === "+") {
    add(firstNum, secondNum);
  } else if (operatorSymbol === "−") {
    subtract(firstNum, secondNum);
  } else if (operatorSymbol === "×") {
    multiply(firstNum, secondNum);
  } else operatorSymbol === "÷";
  divide(firstNum, secondNum);
}

// numbers.forEach((number) => {
//   number.addEventListener("click", (e) => {
//     if (operator === "") {
//       // Read first number if no operator set
//       firstNum += e.target.innerText;
//       inputDisplay.textContent = firstNum;
//     } else {
//       // Read second number
//       secondNum += e.target.innerText;
//       inputDisplay.textContent = secondNum;
//     }
//   });
// });

// operators.forEach((op) => {
//   op.addEventListener("click", (e) => {
//     if (e.target.innerText !== "=") {
//       // If the operator is not equals
//       operator = e.target.innerText;
//     } else {
//       // If equals button clicked
//       switch (
//         operator // Calculate and print output
//       ) {
//         case "+":
//           inputDisplay.innerText = parseInt(firstNum) + parseInt(secondNum);
//           break;
//         case "−":
//           inputDisplay.innerText = parseInt(firstNum) - parseInt(secondNum);
//           break;
//         case "×":
//           inputDisplay.innerText = parseInt(firstNum) * parseInt(secondNum);
//           break;
//         case "÷":
//           inputDisplay.innerText = parseInt(firstNum) / parseInt(secondNum);
//           break;
//         // etc...
//         default:
//           break;
//       }
//     }
//   });
// });
