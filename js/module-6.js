"use strict";
let total = 0;
let input;
do {
  let input = prompt("Please,enter a number");

  if (input === null) {
    break;
  }
  total +=  Number(input) ;

} while (input !== null);
{
  alert(`The total amount is ${total}`);
}
