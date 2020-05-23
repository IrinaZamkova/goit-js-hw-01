"use strict";

const credits = 23580;
const pricePerDroid = 3000;
let ordered = prompt("Укажите кол-во товара:");

if (ordered === null) {
  console.log("Отменено пользователем!");
} else {
  let totalPrice = pricePerDroid * ordered;
  if (totalPrice <= credits) {
    console.log(
      `Вы купили ${ordered} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов.`,
    );
  } else {
    console.log("Недостаточно средств на счету!");
  }
}
