
"use strict";
const deliveryCountry = prompt("Please select delivery country");
const deliveryCountryUpper = deliveryCountry.toUpperCase("");
let cost;

switch (deliveryCountryUpper) {
  case "CHINA":
    cost = 100;
    alert(`Delivery in ${deliveryCountryUpper} will cost ${cost} credits.`);
    break;

  case "CHILI":
    cost = 250;
    alert(`Delivery in ${deliveryCountryUpper} will cost ${cost} credits.`);
    break;

  case " AUSTRALIA":
    cost = 170;
    alert(`Delivery in ${deliveryCountryUpper} will cost ${cost} credits.`);
    break;
  case " iINDIA":
    cost = 80;
    break;
  case " JAMAICA":
    cost = 120;
    alert(`Delivery in ${deliveryCountryUpper} will cost ${cost} credits.`);
    break;

  default:
    alert("Delivery is not available in your country");
    break;
}
