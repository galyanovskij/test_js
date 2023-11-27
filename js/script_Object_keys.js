"use strict";

const obj = new Object(); // старий варіант задання обєкта

const options = {
  name: 'test',
  width: 1024,
  heght: 1024,
  colors: {
    border: 'black',
    bg:'red'
  },
  makeTest: function() { //створюємо власний метод в обєкті
    console.log('test');
  }
};
options.makeTest(); //викликаємо метод

console.log(options.name);
console.log(options['colors']['border']);
delete options.name; // видаляємо елемент обєкта
console.log(options);
let counter = 0;
for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]){
    console.log(`Вkастивість ${i} має значення ${options[key][i]} `);
    counter++;}
  } else {
    console.log(`Вkастивість ${key} має значення ${options[key]} `);
    counter++;
  }
}
console.log(counter);

console.log(Object.keys(options)); // обєкт перетворюємо в масив за ключами
console.log(Object.keys(options).length); // дізнаємось довжину масиву

// деструктуризація обєкта
const {border, bg} = options.colors;
console.log(border);