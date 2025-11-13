'use strict';

const rolls = parseInt(prompt('Enter the number of dice rolls:'));

let sum = 0;

for (let i = 0; i < rolls; i++) {
  const result = Math.floor(Math.random() * 6) + 1;
  sum += result;
}

document.write('The sum of ' + rolls + ' dice rolls is ' + sum + '.');
