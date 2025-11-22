'use strict';

const input = document.querySelector('#calculation');
const button = document.querySelector('#start');
const result = document.querySelector('#result');

button.addEventListener('click', function () {
  const calc = input.value.replace(/\s+/g, '');

  let answer;

  if (calc.includes('+')) {
    const parts = calc.split('+');
    answer = Number(parts[0]) + Number(parts[1]);
  } else if (calc.includes('-')) {
    const parts = calc.split('-');
    answer = Number(parts[0]) - Number(parts[1]);
  } else if (calc.includes('*')) {
    const parts = calc.split('*');
    answer = Number(parts[0]) * Number(parts[1]);
  } else if (calc.includes('/')) {
    const parts = calc.split('/');
    const n1 = Number(parts[0]);
    const n2 = Number(parts[1]);
    answer = n2 === 0 ? 'Error: division by zero' : n1 / n2;
  } else {
    answer = 'Invalid expression';
  }

  result.textContent = `Result: ${answer}`;
});
