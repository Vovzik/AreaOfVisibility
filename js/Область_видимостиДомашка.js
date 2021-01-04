"use strict";

let start = function () {
  let money = +prompt("Угадай число от 1 до 100", "");

  function moneyWorld() {
    if (isNaN(money)) {
      let money1 = confirm("Введите число!");

      if (money1) {
        start(money);
      } else {
        alert("Игра окончена");
      }
    } else if (money > 50) {
      let money2 = confirm("Загаданное число меньше", "");

      if (money2) {
        start(money);
      } else {
        alert("Игра окончена");
      }
    } else if (money < 50) {
      let money3 = confirm("Загаданное число больше");

      if (money3) {
        start(money);
      } else {
        alert("Игра окончена");
      }
    } else if (money === 50) {
      alert("Поздравляю, Вы угадали!!!");
    }
  }

  return moneyWorld();
};

start();
