"use strict";
const credits = 23580;
const pricePerDroid = 3000;
let ordered = prompt("Укажите кол-во товара:");
let totalPrice = credits - pricePerDroid * ordered;

if (ordered === null) {
  console.log("Отменено пользователем!");
} else if (totalPrice >= 0) {
  console.log(
    `Вы купили ${ordered} дроидов, на счету осталось ${totalPrice} кредитов.`,
  );
} else {
  console.log("Недостаточно средств на счету!");
}
