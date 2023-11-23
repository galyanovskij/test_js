"use strict";

// if (4 == 4) {
//   console.log('Правда');
// } else {
//   console.log('Обман');
// }

// const num = 50;

// if (num < 49) {
//   console.log('error');
// } else if (num > 100) {
//   console.log('Багато');
// } else {
//   console.log('OK!');
// }

// (num === 50) ? console.log('Ok!') : console.log('error'); // тернарний оператор - три аргумента

// const my = 50;
// switch (my) {
//   case 49:
//     console.log('error');
//     break;
//   case 100:
//     console.log('error');
//     break;
//   case 50:
//     console.log('it is good');
//     break;
//   default:
//     console.log('no resault');
//     break;
// }

const hamburger = 1;
const cola = 1;
const fries = 1;
const nuggets = 1;

if (hamburger || fries || cola || nuggets ) {
  console.log('Good');
} else {
  console.log('bad');
}