'use strict';

const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const operation = document.querySelector('#operation');
const button = document.querySelector('#start');
const result = document.querySelector('#result');

button.addEventListener('click', function () {
  const n1 = Number(num1.value);
  const n2 = Number(num2.value);
  let answer;

  switch (operation.value) {
    case 'add':
      answer = n1 + n2;
      break;
    case 'sub':
      answer = n1 - n2;
      break;
    case 'multi':
      answer = n1 * n2;
      break;
    case 'div':
      if (n2 === 0) {
        answer = 'Error: division by zero';
      } else {
        answer = n1 / n2;
      }
      break;
    default:
      answer = 'Unknown operation';
  }

  result.textContent = `Result: ${answer}`;
});
