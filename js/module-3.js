"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message = prompt("Please enter password");

if (message === null) {
  alert("Canceled by user !");
} else if (message === ADMIN_PASSWORD) {
  alert("Welcome");
} else {
  alert("Access denied, wrong password!");
}
