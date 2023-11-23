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

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger ===3 && cola ===2 || fries ===3 && nuggets ) {
//   console.log('Good');
// } else {
//   console.log('bad');
// }
// console.log(hamburger || fries || cola || nuggets);



console.log( NaN || 2 || undefined );
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
console.log( !1 && 2 || !3 );
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
