'use strict';

const dogs = [];

for (let i = 0; i < 6; i++) {
  const name = prompt(`Enter dog name ${i + 1}:`);
  dogs.push(name);
}

dogs.sort();
dogs.reverse();

const list = document.querySelector('#dog-list');

for (let dog of dogs) {
  list.innerHTML += `<li>${dog}</li>`;
}
