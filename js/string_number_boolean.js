"use strict"
// перетворюємо типи даних
// в стрічку To String
// 1)
console.log(typeof(String(null))); //string
console.log(typeof(String(7348756348))); //string
// 2) конкатинація - щось додаємо до стрічки  - отримуємо стрічку

console.log(typeof(5 + '')); //string
console.log(typeof(null + '')); //string

const num = 5;
console.log("https://mysite.com/catalog/" + num); //https://mysite.com/catalog/5

const fontSize = 26 + "px"; // 26px CSS

// To number - перетворюємо все в число
// 1)
console.log(typeof(Number("null"))); //string

// 2) унарний плюс - 
console.log(typeof(+"kjh")); //number
// 3)
console.log(typeof(parseInt("15px", 10))); // Converts a string to an integer.
console.log(parseInt("15px", 10)); // 15

// To Boolean
// fals  - 0, '', null, undefined, NaN   все інше true
// 1) нативнийспосіб

let switcher = null;
if (switcher) {
  console.log("Working..."); // не буде виконуватись
}

let switcher = 1;
if (switcher) {
  console.log("Working..."); // буде виконуватись
}

// 2) 
console.log(typeof(Boolean("null"))); // boolean
// 3)
console.log(typeof(!!"jhsfgs")); // boolean