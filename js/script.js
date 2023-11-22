"use strict";
let number = 5;
const LeftBorderWidth = 1;

number = 10;
console.log (number);
let userName = 'John';
let userNumber = 25;
    userNumber = 24;

const obj = {
  name: 'Oleg',
  age: 45,
  marriade: true
}

console.log(obj.age);
console.log(obj['name']);

let arr = ['orange.jpg', 6, 'logo.png', 'name.webp'];
console.log(arr[1]);

const storeDescription = {
  budget: 10000,
  employees: ['Oleg', 'Vika', 'Olga'],
  products: {
      orange: 1000,
      apple: 500
  },
  open: true
}

// alert('Hello');
// const resalt = confirm('Ти тут?');
// console.log(resalt);
// const answer = prompt('Тобу вже 18?', '18'); //+ перед prompt зробить результат числом. А так завжди відповідь користувача стрічка
// console.log(typeof(answer), answer);

// const answers = [];
// answers[0] = prompt ('Ваше імя?', '');
// answers[1] = prompt ('Ваше прізвище?', '');
// answers[2] = prompt ('Скільки років?', '');

// console.log(answers);
// document.write(answers); // перезаписує дані сторінки браузера

const category = 'toys';
console.log('https://mydomen.com/' + category);
console.log(`https://mydomen.com/${category}/5`);

const user = 'Oleg';
console.log(`Hello, ${user}`);
console.log(4 + +'5'); //+ перед 5 перетворює стрічку 5 в число 5 =>9

let incr = 10,
    decr = 10;
incr++; //постфіксний запис
decr--;
console.log(incr);
console.log(decr);
++incr; //префіксний запис
--decr;
console.log(incr);
console.log(decr);

console.log(incr++); // спочатку виводяться старі значення а потім відбувається дія
console.log(decr--);

console.log(++incr); //спочатку відбувається дія, а потім виводиться значення
console.log(--decr);

let a = 10, b = 10;
// console.log(++a, --b);
console.log(a%b); //залишок від ділення => 0

const isChecked = true,
      isClosed = false;
console.log(isChecked || !isClosed); //знак оклику перетворює неправду в правду
