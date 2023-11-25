"use strict";
// методи роботи зі стрічками
const str = 'test sfwПППefe';
const arr = [1, 5, 8, 9];

console.log(str.length); // кількістьсимволів у стрічці з пробілами
console.log(str[2]); // виводимо третій символ стрічки
console.log(arr.length); // кількість елементів масиву
console.log(str.toUpperCase()); // обовязкові скобки () капсом буде вивід стрічки, але значення залишиться не змінним
console.log(str.toLocaleLowerCase());

const fruit = 'Text new';
console.log(fruit.indexOf('new')); // показує з якого номеру символа починається слово яке ми шукаємо - 5. Якщо слова немає отримаємо "-1"

const logg = 'Hello world алдпоавпд';
console.log(logg.slice(6, 10)); // вирізаємо симовли починаючи з 6-го і закінчуючи 9-м "worl", якщо лише перший аргумент, то вирізаємо до кінця стрічки "world алдпоавпд"
console.log(logg.substring(6, 10)); // схожа, але не приймає відємні значення
console.log(logg.substr(6, 5)); // другий аргумент - кількість символів які потрібно вирізати

// Методи роботи з числами

const num = 12.6;
console.log(Math.round(num)); // округлення до цілого математичне

const test = "12.6px";
console.log(parseInt(test)); // витягує ціле число зі стрічки "12" і переводить в числовий тип даних
console.log(parseFloat(test)); // витягує  число з плаваючою крапкою "12.6" і переводить в числовий тип даних