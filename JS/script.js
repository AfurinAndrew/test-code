"use strict";//строгие правил JS
let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;
while (isSunk == false) {
  guess = prompt('Выстрел! (введите число от 0 до 6):')
  if (guess < 0 || guess > 6) {
    alert('Введите правильное значение от 0 до 6!');
  } else {
    guesses = guesses +1;
    if (guess == location1 || guess == location2 || guess == location3) {
      hits = hits + 1;
      alert('Попал!');
      if (hits == 3) {
        isSunk = true;
        alert('Win!');
      }
    } else {
      alert('Промах!');
    }
  }
}
let stats = "You took " + guesses + " guesses to sink the battleship, " +  "which means your shooting accuracy was " + (3/guesses);
alert(stats);
