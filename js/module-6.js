
"use strict";
let total = 0;
do {
  let input = prompt("Please,enter a number");

  if (input === null) {
    break;
  }
  input = Number(input);
  total = input + total;
} while (true);
{
  alert(`The total amount is ${total}`);
}
