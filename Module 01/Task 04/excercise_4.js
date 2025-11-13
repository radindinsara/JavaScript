'use strict';

const name = prompt('What is your name?');

const randomNumber = Math.floor(Math.random() * 4) + 1;

let house;

// Use multiple choice structure to assign a house
if (randomNumber === 1) {
  house = 'Gryffindor';
} else if (randomNumber === 2) {
  house = 'Slytherin';
} else if (randomNumber === 3) {
  house = 'Hufflepuff';
} else {
  house = 'Ravenclaw';
}

document.write(`${name}, you are ${house}.`);
