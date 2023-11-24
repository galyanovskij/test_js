"use strict";
// функції запускаються до того як використаються. Тобто вони можуть бути в кінці сторінки скрипта, а дії з ними на початку
let num = 20; 
function showFirstMessege(text) {
  console.log(text);
  let num = 10; // це нова змінна num  яка використовується лише в середині функції. До функції задана глобальна змінна - саме вона потрапить у консоль зовнішньою командою (20). Якщо забрпти let то ми перевизначимо глобальну і в консоль виведеться (10)
}

showFirstMessege('Hello world!');
console.log(num);

function calc(a, b) {
  return (a + b);
}
console.log(calc(4, 5));
console.log(calc(7, 5));
console.log(calc(19, 5));

function ret() {
  let num = 50;
  //
  return num; //передає значення змінної назовні з функції
}

const myNum = ret();
console.log(myNum);

// 2 закидаємо функцію в змінну. Така функція запускається по ходу виконання коду

const logger = function() {
  console.log('Hello world!');
}
  logger();

// Стрілочна функція.  в одну стрічку
const calc = (a, b) => a + b;

// Якщо функція багатострічна - використовуємо фігурні скобки
const calc = (a, b) => { return(a + b)};  
// або
const calc = (a, b) => { 
  console.log('hello');
  return(a + b);
};  

// калькулятор валюти
const usdCours = 28;
const eurdCours = 32;

function convert(amount, curs) {
  console.log(curs*amount);
  return(curs*amount);
}

convert(500,usdCours );
convert(500,eurdCours );
// пишемо функцію на знижку
const discount = 0.8;

function promoution(result) {
  console.log(result*discount);
}

promoution(convert(500, usdCours)); // викликаємо функцію в функції

// варіант череззмінну

const res = convert(500, usdCours);
promoution(res);

// після return функція більше нічого не виконує

function test() {
  for (let i=1; i<5; i++) {
    console.log(i);
    if (i === 3) return
  }
  console.log('done'); // в консоль не виведеться, тому що спрацює return і функція зупиниться
}

test();




