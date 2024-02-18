"use strict";

//*ELEMENTS
const input1 = document.getElementById("num1");
const select = document.getElementById("operators");
const input2 = document.getElementById("num2");
const equalButton = document.getElementById("equal");
const text = document.getElementById("text");
const clear = document.getElementById("clear");
const resetButton = document.getElementById("reset");

//*SET TEXT RESULT TO EMPTY STRING
text.innerText = "";

//*CALC FUNCTION
function calculate() {
  const num1 = Number(input1.value); //*The value property sets or returns the value of the value attribute of a text field.
  const num2 = Number(input2.value);
  const operator = select.value;
  if (operator === "+") {
    text.innerText = num1 + num2;
  } else if (operator === "-") {
    text.innerText = num1 - num2;
  } else if (operator === "*") {
    text.innerText = num1 * num2;
  } else if (operator === "/") {
    text.innerText = num1 / num2;
  }
}
//*RESET FNC
function reset() {
  select.value = "+";
  input1.value = "";
  input2.value = "";
  text.innerText = "";
}
//*EQUAL BUTTON
equalButton.addEventListener("click", calculate);
//*RESET BUTTON
resetButton.addEventListener("click", reset);
