'use strict';

const count = parseInt(prompt('Enter the number of participants:'));

const participants = [];

for (let i = 0; i < count; i++) {
  const name = prompt(`Enter participant ${i + 1} name:`);
  participants.push(name);
}

participants.sort();

const list = document.querySelector('#participant-list');

for (let p of participants) {
  list.innerHTML += `<li>${p}</li>`;
}
