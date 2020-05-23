"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;
let input = prompt("Please enter password");

if (input === null) {
  message = "Canceled by user !";
} else if (input === ADMIN_PASSWORD) {
  message = "Welcome";
} else {
  message = "Access denied, wrong password!";
}
alert(message);
