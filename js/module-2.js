"use strict";

const total = 100;
const ordered = 80;
const massage =
  ordered <= total
    ? console.log("Заказ оформлен, с вами свяжется менеджер.")
    : console.log("На складе недостаточно товаров!");
