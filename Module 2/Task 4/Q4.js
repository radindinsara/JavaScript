'use strict';

const numbers = [];

let num = parseInt(prompt('Enter a number (0 to stop):'));

while (num !== 0) {
  numbers.push(num);
  num = parseInt(prompt('Enter a number (0 to stop):'));
}

numbers.sort((a, b) => b - a);

console.log('Numbers from largest to smallest:');
for (let n of numbers) {
  console.log(n);
}
