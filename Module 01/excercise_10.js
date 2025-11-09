'use strict';

const diceCount = parseInt(prompt('Enter the number of dice:'));
const desiredSum = parseInt(prompt('Enter the desired sum of eye numbers:'));

const rolls = 10000; // number of simulations
let successCount = 0;

for (let i = 0; i < rolls; i++) {
  let total = 0;

  for (let j = 0; j < diceCount; j++) {
    total += Math.floor(Math.random() * 6) + 1;
  }

  if (total === desiredSum) {
    successCount++;
  }
}

const probability = (successCount / rolls) * 100;

document.write(
  'Probability to get sum ' +
  desiredSum +
  ' with ' +
  diceCount +
  ' dice is ' +
  probability.toFixed(2) +
  '%.'
);
