"use strict";
const deliveryCountry = prompt("Please select delivery country");

if (deliveryCountry === null) {
  console.log("Canceled by user");
} else {
  switch (deliveryCountry.toUpperCase()) {
    
    case "CHINA":
      alert(`Delivery in ${deliveryCountry} will cost 100 credits.`);
      break;

    case "CHILI":
      alert(`Delivery in ${deliveryCountry} will cost 250 credits.`);
      break;

    case " AUSTRALIA":
      alert(`Delivery in ${deliveryCountry} will cost 170 credits.`);
      break;

    case " iINDIA":
      alert(`Delivery in ${deliveryCountry} will cost 80 credits.`);
      break;

    case " JAMAICA":
      alert(`Delivery in ${deliveryCountryUpper} will cost 120 credits.`);
      break;

    default:
      alert("Delivery is not available in your country");
      break;
  }
}
